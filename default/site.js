/* site.js — Bells Up AI marketing site
   Nav toggle + image error fallback */

(function () {
  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      document.getElementById('nav-menu').classList.toggle('active');
    });
  }

  /* Graceful image fallback — hides broken images, shows data-fallback text if provided */
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      var fallback = this.getAttribute('data-fallback');
      if (fallback) {
        this.parentElement.textContent = fallback;
      }
    });
  });
})();
