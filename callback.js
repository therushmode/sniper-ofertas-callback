'use strict';

// This static page is not an OAuth client. Never read, display, store or exchange
// authorization parameters. Removing the URL suffix does not erase host logs.
(() => {
  const hasParameters = Boolean(window.location.search || window.location.hash);
  if (!hasParameters) return;

  try {
    window.history.replaceState(null, '', window.location.pathname);
  } catch {
    // The page still must not reflect parameters if history updates are blocked.
  }

  document.addEventListener('DOMContentLoaded', () => {
    const notice = document.getElementById('return-notice');
    if (notice) notice.hidden = false;
  }, { once: true });
})();
