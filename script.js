/**
 * Rutvik Patel — Portfolio
 * script.js
 *
 * All interactive behaviour lives here.
 * The terminal command engine is embedded in index.html
 * for self-containment. This file handles:
 *   - Mobile nav hamburger toggle
 *   - Project accordion
 *   - Demo box toggle
 *   - Scroll-reveal (IntersectionObserver)
 */

// ── Mobile nav ──────────────────────────────
function toggleMenu() {
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mmenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mmenu').classList.remove('open');
}

// ── Project accordion ───────────────────────
function toggleProj(el) {
  const was = el.classList.contains('active');
  document.querySelectorAll('.proj-item').forEach(p => p.classList.remove('active'));
  if (!was) el.classList.add('active');
}

// ── Demo box ────────────────────────────────
function toggleDemo(btn, e) {
  e.stopPropagation();
  const box = btn.closest('.proj-expand').querySelector('.demo-box');
  box.classList.toggle('open');
  btn.textContent = box.classList.contains('open') ? '✕ close demo' : '▶ request demo';
}

// ── Scroll fade-in ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.06 }
  );
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
});
