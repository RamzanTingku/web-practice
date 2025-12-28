# Workspace Live Server

Tiny dev server that lists all index.html files under the workspace and supports live-reload.

Quick start (macOS, zsh):

1. Change to workspace root:

```bash
cd "/Users/ramzan/Developer/Web Practice"
```

2. Install dependencies:

```bash
npm install mime chokidar ws minimist
```

3. Start server:

```bash
npm start
# or
node serve.js --port 3000
```

4. Open the root URL in your browser:

http://127.0.0.1:3000/

Click any entry to open that `index.html`.

Flags:
- `--port <n>` set the HTTP port (default 3000)
- `--root <path>` serve a different root (default current working directory)
- `--no-reload` disable automatic live reload

Notes:
- The server injects a tiny WebSocket client into HTML pages to reload on changes to `.html`, `.css`, or `.js` files.
- The WebSocket server listens on port HTTP_PORT + 1.

