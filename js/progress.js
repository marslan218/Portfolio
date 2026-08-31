(function () {
  // ── Single source of truth for the reading-progress pill ──
  // The pill (hamburger + label + chevron + % chip) and its menu used to be
  // hand-copied into every case-study page. Instead we build the whole thing
  // here, once, and derive the menu straight from the page's own sections —
  // every section block already carries id="…" + data-section="Name" (used for
  // scroll tracking), so the menu can never drift out of sync with the content.
  // Drop a section in/out of a page and the menu follows automatically; tweak
  // the chrome (e.g. the hamburger icon) and it changes everywhere from here.
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  if (!sections.length) return;   // no sections → no pill (e.g. landing/work pages)

  // Tommy-exact chrome SVGs (16px hamburger, chevron). currentColor so the
  // CSS (.progress-pill-menu-icon / -chevron) controls the stroke colour.
  const HAMBURGER =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  const CHEVRON =
    '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5.84375 10.625L8.5 13.2812L11.1562 10.625M5.84375 6.375L8.5 3.71875L11.1562 6.375" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // Build the tracker: menu (generated from sections) + pill header.
  const tracker = document.createElement('div');
  tracker.className = 'progress-tracker';
  tracker.id = 'progressTracker';

  const menu = document.createElement('div');
  menu.className = 'progress-menu';
  menu.id = 'progressMenu';
  sections.forEach(function (s) {
    const item = document.createElement('a');
    item.className = 'progress-menu-item';
    item.setAttribute('data-target', s.id);
    item.textContent = s.dataset.section;   // textContent decodes entities (e.g. "Refer & earn")
    menu.appendChild(item);
  });

  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'progress-pill';
  pill.id = 'progressPill';
  pill.innerHTML =
    '<span class="progress-pill-menu-icon" aria-hidden="true">' + HAMBURGER + '</span>' +
    '<span class="progress-pill-label" id="progressLabel"></span>' +
    '<span class="progress-pill-chevron">' + CHEVRON + '</span>' +
    '<span class="progress-pill-pct" id="progressPct">0%</span>';

  tracker.appendChild(menu);
  tracker.appendChild(pill);
  document.body.appendChild(tracker);

  const label = pill.querySelector('#progressLabel');
  const pct = pill.querySelector('#progressPct');
  const menuItems = Array.from(menu.querySelectorAll('.progress-menu-item'));
  label.textContent = sections[0].dataset.section;   // sensible initial; update() refines on first run

  // ── Expanding-pill open/close (tommysmith.co interaction) ──
  // The tracker is one overflow-hidden, bottom-anchored container holding the
  // header (pill) + the menu. We animate its HEIGHT between header-only and
  // header+menu so it grows upward in place; CSS eases the corner radius from
  // a full pill to a rounded card. Explicit px heights keep the height
  // transition smooth (height:auto can't be transitioned).
  function collapse() {
    tracker.style.height = pill.offsetHeight + 'px';
  }
  function expand() {
    tracker.style.height = (pill.offsetHeight + menu.offsetHeight) + 'px';
  }
  function openMenu() {
    tracker.classList.add('open');
    pill.classList.add('menu-open');
    expand();
  }
  function closeMenu() {
    tracker.classList.remove('open');
    pill.classList.remove('menu-open');
    collapse();
  }
  // Start collapsed to the header height.
  collapse();

  pill.addEventListener('click', function (e) {
    e.stopPropagation();
    if (tracker.classList.contains('open')) closeMenu();
    else openMenu();
  });

  document.addEventListener('click', closeMenu);

  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Keep heights correct if the viewport (and label wrapping) changes.
  window.addEventListener('resize', function () {
    if (tracker.classList.contains('open')) expand();
    else collapse();
  });

  // ── Percentage odometer ──
  // Each digit is a column of 0–9 stacked vertically inside an overflow-hidden
  // box; the column slides so the active digit shows. As the number changes the
  // changed digit rolls (old slides up/out, new comes in) like a counter.
  pct.classList.add('pct-odometer');
  pct.textContent = '';
  const digitsWrap = document.createElement('span');
  digitsWrap.className = 'pct-digits';
  const percentSign = document.createElement('span');
  percentSign.className = 'pct-sign';
  percentSign.textContent = '%';
  pct.appendChild(digitsWrap);
  pct.appendChild(percentSign);

  const cols = []; // each: { el, strip }
  function makeColumn() {
    const col = document.createElement('span');
    col.className = 'pct-col';
    const strip = document.createElement('span');
    strip.className = 'pct-strip';
    for (let d = 0; d <= 9; d++) {
      const s = document.createElement('span');
      s.textContent = String(d);
      strip.appendChild(s);
    }
    col.appendChild(strip);
    return { el: col, strip: strip };
  }
  function setPct(n) {
    const str = String(Math.max(0, Math.min(100, n)));
    const want = str.length;
    while (cols.length < want) { const c = makeColumn(); cols.push(c); digitsWrap.appendChild(c.el); }
    while (cols.length > want) { const c = cols.pop(); c.el.remove(); }
    for (let i = 0; i < want; i++) {
      const digit = Number(str[i]);
      cols[i].strip.style.transform = 'translateY(' + (-digit * 10) + '%)';
    }
  }

  function getScrollPct() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  }

  function getCurrentSection() {
    const threshold = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top + window.scrollY <= threshold) current = s;
    }
    return current;
  }

  let lastPct = -1;
  function update() {
    const p = getScrollPct();
    if (p !== lastPct) { setPct(p); lastPct = p; }
    const current = getCurrentSection();
    if (current) {
      if (label.textContent !== current.dataset.section) label.textContent = current.dataset.section;
      menuItems.forEach(function (item) {
        item.classList.toggle('active', item.dataset.target === current.id);
      });
    }
  }

  // ── Update triggers ──
  // The scroll listener alone is not enough during page load: as images decode
  // the document grows and section positions shift, and the browser can defer
  // scroll handlers while the main thread is busy. We rAF-throttle update()
  // and call it on every event that can change scrollHeight or current section:
  // scroll, resize, each image's load, body size changes, and final window load.
  let pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; update(); });
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);

  document.querySelectorAll('img').forEach(function (img) {
    if (!img.complete) img.addEventListener('load', schedule, { once: true });
  });

  if ('ResizeObserver' in window) {
    new ResizeObserver(schedule).observe(document.body);
  }

  update();

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const target = document.getElementById(item.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    });
  });

  // The progress pill stays visible at all times (no auto-hide on scroll) —
  // on both desktop and mobile, per design.
})();
