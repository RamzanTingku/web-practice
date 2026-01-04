// Small helper: smooth-scroll to anchors when clicked
document.addEventListener('click', function (e) {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
  }
});

// Recommendation submission + confirmation
(function () {
  const form = document.getElementById('rec-form');
  const modal = document.getElementById('rec-confirm');
  const preview = document.getElementById('rec-preview');
  const yes = document.getElementById('rec-confirm-yes');
  const no = document.getElementById('rec-confirm-no');
  const grid = document.querySelector('.recommendations-grid');
  if (!form || !modal || !preview || !yes || !no || !grid) return;
  let pending = null;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const author = (fd.get('author') || '').trim();
    const role = (fd.get('role') || '').trim();
    const text = (fd.get('text') || '').trim();
    if (!author || !text) { alert('Please enter your name and recommendation text.'); return; }
    preview.textContent = `"${text}" — ${author}${role ? ', ' + role : ''}`;
    pending = { author, role, text };
    modal.setAttribute('aria-hidden', 'false');
    yes.focus();
  });

  no.addEventListener('click', function () {
    modal.setAttribute('aria-hidden', 'true');
    pending = null;
  });

  yes.addEventListener('click', function () {
    if (!pending) return;
    const block = document.createElement('blockquote');
    block.className = 'recommendation';
    const textNode = document.createTextNode(pending.text);
    block.appendChild(textNode);
    const footer = document.createElement('footer');
    footer.style.color = 'var(--text)';
    footer.textContent = '— ' + pending.author + (pending.role ? ', ' + pending.role : '');
    block.appendChild(footer);
    grid.appendChild(block);
    modal.setAttribute('aria-hidden', 'true');
    form.reset();
    pending = null;
    // show thanks popup
    showPopup('Thanks — recommendation submitted.');
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
      pending = null;
    }
  });
}());

// small toast helper
function showToast(msg, duration = 3000) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  // trigger show
  requestAnimationFrame(() => t.classList.add('visible'));
  // remove after duration
  setTimeout(() => {
    t.classList.remove('visible');
    t.addEventListener('transitionend', () => t.remove(), { once: true });
  }, duration);
}

// show a modal popup with message and an OK button
function showPopup(message) {
  // reuse if already present
  let modal = document.getElementById('thanks-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'thanks-modal';
    modal.className = 'thanks-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="thanks-inner" role="dialog" aria-modal="true">
        <p id="thanks-text"></p>
        <div class="actions">
          <button class="ok" type="button">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const text = modal.querySelector('#thanks-text');
  const ok = modal.querySelector('.ok');
  text.textContent = message || 'Thanks — recommendation submitted.';
  modal.setAttribute('aria-hidden', 'false');
  ok.focus();

  function close() {
    modal.setAttribute('aria-hidden', 'true');
    ok.removeEventListener('click', onOk);
    document.removeEventListener('keydown', onKey);
  }
  function onOk() { close(); }
  function onKey(e) { if (e.key === 'Escape') close(); }

  ok.addEventListener('click', onOk);
  document.addEventListener('keydown', onKey);
}