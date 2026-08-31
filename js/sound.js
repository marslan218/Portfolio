// ─── Sound + click spark ───
// Plays a Web Audio synth tick on every mousedown and fires a small
// spark burst at the click position. Sound state persists in
// localStorage and is toggled via #soundToggle (landing page only).
(function () {
  let audioCtx = null;
  let soundEnabled = localStorage.getItem('sound-enabled') !== 'false';

  function getCtx() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  // Short sine chirp — used when turning sound back on.
  function playTick() {
    const ctx = getCtx();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.015);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.018);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.02);
  }

  // Filtered noise burst — plays on every click.
  function playHapticClick() {
    const ctx = getCtx();
    const t = ctx.currentTime + 0.01;
    const bufLen = Math.floor(0.008 * ctx.sampleRate);
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (2 * Math.random() - 1) * Math.exp(-i / 40);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3200;
    filter.Q.value = 3;
    const gain = ctx.createGain();
    gain.gain.value = 1;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.onended = () => src.disconnect();
    src.start(t);
    if (navigator.vibrate) navigator.vibrate(8);
  }

  // ── Click spark (ported from the ClickSpark effect on ch.sh) ──
  // A fixed full-screen canvas; each click fires SPARK.count thin lines
  // that radiate from the cursor and fade over SPARK.duration ms. Colour
  // resolves from --text-primary, so the burst follows the active theme.
  const SPARK = { count: 6, radius: 12, size: 6, opacity: 0.3, duration: 300, scale: 1 };
  const sparkCanvas = document.createElement('canvas');
  sparkCanvas.className = 'click-spark';
  Object.assign(sparkCanvas.style, {
    position: 'fixed', top: '0', left: '0',
    width: '100vw', height: '100vh',
    pointerEvents: 'none', zIndex: '9999',
    color: 'var(--text-primary)',
  });
  document.body.appendChild(sparkCanvas);
  const sparkCtx = sparkCanvas.getContext('2d');
  let sparks = [];

  function sizeSparkCanvas() {
    const dpr = window.devicePixelRatio || 1;
    sparkCanvas.width = window.innerWidth * dpr;
    sparkCanvas.height = window.innerHeight * dpr;
    sparkCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  sizeSparkCanvas();
  window.addEventListener('resize', sizeSparkCanvas);

  const easeOutSpark = (t) => t * (2 - t);

  function drawSparks(now) {
    sparkCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    sparkCtx.globalAlpha = SPARK.opacity;
    const color = getComputedStyle(sparkCanvas).color;
    sparks = sparks.filter((s) => {
      const elapsed = now - s.startTime;
      if (elapsed >= SPARK.duration) return false;
      const eased = easeOutSpark(elapsed / SPARK.duration);
      const dist = eased * SPARK.radius * SPARK.scale;
      const len = SPARK.size * (1 - eased);
      const cos = Math.cos(s.angle);
      const sin = Math.sin(s.angle);
      sparkCtx.strokeStyle = color;
      sparkCtx.lineWidth = 1.5;
      sparkCtx.lineCap = 'round';
      sparkCtx.beginPath();
      sparkCtx.moveTo(s.x + dist * cos, s.y + dist * sin);
      sparkCtx.lineTo(s.x + (dist + len) * cos, s.y + (dist + len) * sin);
      sparkCtx.stroke();
      return true;
    });
    requestAnimationFrame(drawSparks);
  }
  requestAnimationFrame(drawSparks);

  function spawnSpark(x, y) {
    const now = performance.now();
    for (let i = 0; i < SPARK.count; i++) {
      sparks.push({ x, y, angle: (2 * Math.PI * i) / SPARK.count, startTime: now });
    }
  }

  function applyState() {
    document.documentElement.classList.toggle('sound-muted', !soundEnabled);
  }

  applyState();

  // Fires on mousedown (press, not release) for tactile feel.
  document.addEventListener('mousedown', function (e) {
    spawnSpark(e.clientX, e.clientY);
    if (!soundEnabled) return;
    if (e.target.closest('#soundToggle')) return; // toggle plays its own tick
    playHapticClick();
  }, true);

  // Sound toggle button — landing page only.
  const btn = document.getElementById('soundToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      localStorage.setItem('sound-enabled', soundEnabled);
      applyState();
      if (soundEnabled) playTick();
    });
  }
})();
