// This script helps fix asset paths for GitHub Pages deployment
(function() {
  // Only run in production environment on GitHub Pages
  if (window.location.hostname === 'danny-0324.github.io') {
    // Base path for the repository
    const basePath = '/DannyCS_Portfolio';
    
    // Fix relative paths in link and script tags
    document.querySelectorAll('link[href^="/"], script[src^="/"]').forEach(el => {
      if (el.hasAttribute('href') && !el.getAttribute('href').startsWith(basePath)) {
        el.setAttribute('href', `${basePath}${el.getAttribute('href')}`);
      }
      if (el.hasAttribute('src') && !el.getAttribute('src').startsWith(basePath)) {
        el.setAttribute('src', `${basePath}${el.getAttribute('src')}`);
      }
    });
    
    // Fix image sources
    document.querySelectorAll('img[src^="/"]').forEach(el => {
      if (!el.getAttribute('src').startsWith(basePath)) {
        el.setAttribute('src', `${basePath}${el.getAttribute('src')}`);
      }
    });
    
    console.log('Path fix script executed for GitHub Pages');
  }
})();
