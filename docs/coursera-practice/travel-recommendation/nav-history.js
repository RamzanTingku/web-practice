// Prevent duplicate history entries for repeated navigations to the same page
(function(){
  try {
    const STORAGE_KEY = 'visitedPages';
    // Ensure current path is recorded on load
    const current = location.pathname + location.search + location.hash;
    const stored = sessionStorage.getItem(STORAGE_KEY);
    let visited = stored ? JSON.parse(stored) : [];
    if (!visited.includes(current)) visited.push(current);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visited));

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      // ignore anchors, mailto, tel, external links
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return; // external

      // Only intercept same-directory navigation within the site
      e.preventDefault();
      const dest = url.pathname + url.search + url.hash;
      visited = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]');

      if (visited.includes(dest)) {
        // If we've visited this destination already in this tab, replace current history
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
        location.replace(url.href);
      } else {
        // First time visiting this dest in this tab — navigate normally and record
        visited.push(dest);
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
        location.href = url.href;
      }
    }, {capture: true});
  } catch (err) {
    // Fail silently — non-critical feature
    console.warn('nav-history: ', err);
  }
})();
