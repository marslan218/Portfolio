// ─── Live clock (landing page only) ───
// Updates #live-clock every second in 12-hour format.
(function () {
  const el = document.getElementById('live-clock');
  if (!el) return;
  function tick() {
    const now = new Date();
    let h = now.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;
  }
  tick();
  setInterval(tick, 1000);
})();

// ─── Landing name letter-scatter hover ───
// Split the identity name into per-character spans; on hover, a random
// subset dims to the tertiary colour for a scattered "spotlight" effect.
(function () {
  const name = document.querySelector('.identity .name');
  if (!name) return;
  const text = name.textContent;
  name.textContent = '';
  const chars = [];
  for (const ch of text) {
    const span = document.createElement('span');
    span.className = 'name-char';
    span.textContent = ch;
    if (ch === ' ') span.innerHTML = '&nbsp;';
    name.appendChild(span);
    chars.push(span);
  }
  let timer = null;
  function scatter() {
    chars.forEach(function (c) {
      c.classList.toggle('name-char--dim', Math.random() > 0.55);
    });
  }
  name.addEventListener('mouseenter', function () {
    scatter();
    timer = setInterval(scatter, 90);
  });
  name.addEventListener('mouseleave', function () {
    clearInterval(timer); timer = null;
    chars.forEach(function (c) { c.classList.remove('name-char--dim'); });
  });
})();

// ─── Breadcrumb scroll compaction (case-study pages) ───
// Once the page scrolls past a small threshold, the sticky topbar pulls up
// to the viewport edge and tightens its internal spacing.
(function () {
  const topbar = document.querySelector('.cs-topbar');
  if (!topbar) return;
  function onScroll() {
    topbar.classList.toggle('cs-topbar--scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ─── Work-page project videos: play only while in view ───
// The showcase reels are muted, looping, and gated to the viewport so off-screen
// videos don't burn CPU/battery. With preload="none" the bytes load on first
// play (on scroll-in); the poster shows until then. prefers-reduced-motion leaves
// them paused on the poster.
(function () {
  const vids = document.querySelectorAll('.showcase-video, .view-work-video, .cs-video');
  if (!vids.length || !('IntersectionObserver' in window)) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      const v = e.target;
      if (e.isIntersecting && !reduce) {
        const p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });
  vids.forEach(function (v) { io.observe(v); });
})();

