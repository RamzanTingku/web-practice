// Minimal dev server with index listing and live-reload
// Usage: node serve.js [--port 3000] [--root "."] [--no-reload]

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Try to require optional deps and provide helpful message if missing
let chokidar, WebSocket, mime;
try { chokidar = require('chokidar'); } catch (e) { /* will warn later */ }
try { WebSocket = require('ws'); } catch (e) { /* will warn later */ }
try { mime = require('mime'); } catch (e) { /* will warn later */ }

const argv = require('minimist')(process.argv.slice(2));
const PORT = argv.port || process.env.PORT || 3000;
const ROOT = path.resolve(argv.root || process.env.ROOT || process.cwd());
const NO_RELOAD = argv['no-reload'] || process.env.NO_RELOAD;
const HOST = argv.host || process.env.HOST || '127.0.0.1';

if (!mime) {
  console.error('Missing dependency "mime". Please run: npm install mime chokidar ws minimist');
  process.exit(1);
}

if (!chokidar) {
  console.error('Missing dependency "chokidar". Please run: npm install mime chokidar ws minimist');
  process.exit(1);
}

if (!WebSocket) {
  console.error('Missing dependency "ws". Please run: npm install mime chokidar ws minimist');
  process.exit(1);
}

const WSS_PORT = PORT + 1; // websocket server on adjacent port

function findIndexFiles(root) {
  const results = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.isFile() && e.name.toLowerCase() === 'index.html') {
        results.push(full);
      }
    }
  }
  try { walk(root); } catch (err) { /* ignore */ }
  return results;
}

function generateRootIndex(root) {
  const files = findIndexFiles(root);
  const rel = files.map(f => path.relative(root, f));
  const links = rel.map(r => {
    const urlPath = '/' + r.replace(/\\\\/g, '/').replace(/index.html$/i, '');
    return `<li><a href="${urlPath}">${r}</a></li>`;
  }).join('\n');
  return `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Index of index.html files</title></head>
  <body>
    <h1>index.html files under ${root}</h1>
    <ul>
      ${links}
    </ul>
    <p>Serving on http://${HOST}:${PORT}</p>
  </body>
</html>`;
}

function sendFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) { res.statusCode = 404; res.end('Not found'); return; }
    const typeResolver = mime.getType || mime.lookup || mime.getMime || mime.getTypes || null;
    let type = 'application/octet-stream';
    try {
      if (typeof typeResolver === 'function') type = typeResolver(filePath) || type;
      else if (mime && mime.default && typeof mime.default.getType === 'function') type = mime.default.getType(filePath) || type;
    } catch (e) { /* ignore */ }
    res.setHeader('Content-Type', type + (type.startsWith('text/') && '; charset=utf-8' || ''));
    // inject reload script for html
    if (!NO_RELOAD && type === 'text/html') {
      const body = data.toString('utf8');
      // safer injection: find last </body> case-insensitively and insert before it
      const client = `\n<script>/* live-reload client */(function(){try{var s=new WebSocket('ws://${HOST}:${WSS_PORT}');s.onmessage=function(ev){if(ev.data==='reload'){location.reload();}}}catch(e){}})();</script>\n`;
      const lower = body.toLowerCase();
      const idx = lower.lastIndexOf('</body>');
      if (idx !== -1) {
        const injected = body.slice(0, idx) + client + body.slice(idx);
        res.end(injected);
      } else {
        res.end(body + client);
      }
    } else {
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(generateRootIndex(ROOT));
    return;
  }
  const fsPath = path.join(ROOT, pathname);
  // try direct file
  if (fs.existsSync(fsPath) && fs.statSync(fsPath).isFile()) {
    sendFile(fsPath, res);
    return;
  }
  // if path is a directory, try index.html
  const asDir = fsPath.replace(/\/$/, '');
  const indexFile = path.join(asDir, 'index.html');
  if (fs.existsSync(indexFile) && fs.statSync(indexFile).isFile()) {
    sendFile(indexFile, res);
    return;
  }
  // fallback 404
  res.statusCode = 404;
  res.end('404 Not Found');
});

server.listen(PORT, HOST, () => {
  console.log(`Serving ${ROOT} at http://${HOST}:${PORT}/`);
  console.log(`WebSocket live-reload on ws://${HOST}:${WSS_PORT}/ (disabled if --no-reload)`);
});

// WebSocket server for reload
const wss = new WebSocket.Server({ port: WSS_PORT });
wss.on('connection', ws => { /* nothing */ });

// file watcher
const watcher = chokidar.watch(ROOT, { ignored: /node_modules|\.git/, ignoreInitial: true });
watcher.on('all', (ev, p) => {
  const rel = path.relative(ROOT, p);
  const ext = path.extname(p).toLowerCase();
  if (!['.html', '.css', '.js'].includes(ext)) return;
  console.log(`${ev}: ${rel}`);
  if (!NO_RELOAD) {
    wss.clients.forEach(c => { if (c.readyState === WebSocket.OPEN) c.send('reload'); });
  }
});

process.on('SIGINT', () => { console.log('Shutting down'); watcher.close(); server.close(); wss.close(); process.exit(0); });

