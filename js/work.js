// ─── Work-page card interactions ───
// Behaviour for the project showcase cards. Lives here (not inline) so all
// page behaviour stays in js/ modules, matching the other modules.
(function () {
  // #35: the whole work card opens its case study (clicks on inner links win).
  document.querySelectorAll('.showcase-card[data-cs]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;
      window.location.href = card.dataset.cs;
    });
  });
  // #37: "Jump to next project" smooth-scrolls to the next project card.
  document.querySelectorAll('.showcase-next').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href') || '';
      if (id.charAt(0) !== '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
