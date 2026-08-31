(function () {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}

  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    function applyToggle() {
      var isDark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (err) {}
    }

    if (!document.startViewTransition) {
      applyToggle();
      return;
    }

    document.documentElement.style.setProperty('--vt-x', x + 'px');
    document.documentElement.style.setProperty('--vt-y', y + 'px');
    document.documentElement.style.setProperty('--vt-radius', radius + 'px');

    document.startViewTransition(applyToggle);
  });
})();
