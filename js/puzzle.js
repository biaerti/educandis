/* ============================================
   EDUCANDIS – puzzle.js
   Puzzle assembly animation on scroll
   ============================================ */

const puzzleSection = document.querySelector('.puzzle-section');
const puzzlePieces  = document.querySelectorAll('.puzzle-piece');

if (puzzlePieces.length > 0) {
  const puzzleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Assemble each piece with staggered delay (delays set in CSS)
      puzzlePieces.forEach(piece => {
        piece.classList.add('assembled');
      });

      puzzleObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  if (puzzleSection) {
    puzzleObserver.observe(puzzleSection);
  }
}

/* ---------- Subtle tilt on card hover ---------- */
document.querySelectorAll('.service-card:not(.service-card--inactive)').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    const rotX   =  dy * -4;  // degrees
    const rotY   =  dx *  4;

    card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    card.style.transition = 'transform .1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform .4s ease, box-shadow .3s, border-color .3s';
  });
});
