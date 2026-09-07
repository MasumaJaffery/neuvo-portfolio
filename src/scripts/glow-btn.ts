// BorderGlow — cursor angle + edge proximity tracking, applied to every
// .glow-btn on the page. Runs once per page load and (re)binds to any
// .glow-btn present at call time.
export function initGlowButtons(): void {
  document.querySelectorAll<HTMLElement>('.glow-btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      // cursor angle from centre (0deg = top, clockwise)
      const angleRad = Math.atan2(x - cx, -(y - cy));
      const angleDeg = ((angleRad * 180) / Math.PI + 360) % 360;
      // nearest edge distance → map to 0–100 proximity
      const edgeDist = Math.min(x, r.width - x, y, r.height - y);
      const sensitivity =
        parseFloat(getComputedStyle(btn).getPropertyValue('--edge-sensitivity')) || 30;
      const proximity = Math.max(0, Math.min(100, (1 - edgeDist / (sensitivity * 2)) * 100));
      btn.style.setProperty('--cursor-angle', `${angleDeg}deg`);
      btn.style.setProperty('--edge-proximity', proximity.toString());
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--edge-proximity', '0');
    });
  });
}
