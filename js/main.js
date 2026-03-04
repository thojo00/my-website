/* ============================================================
   RetroRide Aarhus — Main JavaScript
   Handles: mobile nav toggle, active link highlighting
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile Navigation Toggle ─────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close the menu when a link is clicked (smooth UX on mobile)
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close the menu if user clicks outside of it
    document.addEventListener('click', function (event) {
      if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ── Active Navigation Link Highlighting ─────────────────── */
  // Get the current page filename (e.g. "categories.html" or "index.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    const linkPage = link.getAttribute('href').split('/').pop();

    // Match the current page to highlight the right nav link
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

    // Also highlight "Collection" when on any bike detail page
    if (currentPage.startsWith('bike-') && linkPage === 'categories.html') {
      link.classList.add('active');
    }
  });

});
