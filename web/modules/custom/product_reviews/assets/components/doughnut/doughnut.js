/**
 * Initialize circular chart(s) on page.
 * - Looks for .circular-chart
 * - Reads data-percentage (0..100)
 * - Updates stroke-dasharray / stroke-dashoffset and center label
 * - Adds aria-valuenow for screen readers
 */
(function () {
  function initCircularChart(el) {
    const svg = el.querySelector('.circular-chart__svg');
    const progress = el.querySelector('.circular-chart__progress');
    const text = el.querySelector('.circular-chart__text');

    // default to 0 if not provided
    const pctAttr = el.getAttribute('data-percentage') || '0';
    let pct = parseFloat(pctAttr);
    if (!isFinite(pct)) pct = 0;
    pct = Math.max(0, Math.min(100, pct));

    // circle radius from SVG r attribute
    const r = parseFloat(progress.getAttribute('r'));
    const circumference = 2 * Math.PI * r;

    // set stroke-dasharray to circumference
    progress.style.strokeDasharray = String(circumference);

    // stroke-dashoffset defines how much of the circle is hidden
    // 0% => full circle visible; 100% => fully hidden
    // we want offset = circumference * (1 - pct / 100)
    const offset = circumference * (1 - pct / 100);

    // force reflow before animating for css transition to apply
    progress.style.strokeDashoffset = String(circumference);
    // next frame: set to target offset to animate
    requestAnimationFrame(function () {
      progress.style.strokeDashoffset = String(offset);
    });

    // set center text
    text.textContent = Math.round(pct);

    // accessibility: expose as simple progress-like widget
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', 'Progress: ' + Math.round(pct) + ' percent');
    // also add aria attributes for more compatibility
    el.setAttribute('aria-valuemin', '0');
    el.setAttribute('aria-valuemax', '100');
    el.setAttribute('aria-valuenow', String(Math.round(pct)));
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.circular-chart').forEach(initCircularChart);
  });

  // Optional: API to update values later
  window.setCircularPercentage = function (el, value) {
    el.setAttribute('data-percentage', String(value));
    initCircularChart(el);
  };
})();
