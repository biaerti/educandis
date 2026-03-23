/* ============================================
   EDUCANDIS – main.js
   ============================================ */

// ---------- Page loader ----------
const loader = document.getElementById('page-loader');
window.addEventListener('load', () => {
  setTimeout(() => {
    loader && loader.classList.add('hidden');
    // trigger hero bg scale
    document.querySelector('.hero-bg')?.classList.add('loaded');
  }, 900);
});

// ---------- Sticky nav ----------
const navbar = document.querySelector('.navbar');
function handleScroll() {
  if (window.scrollY > 40) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// ---------- Mobile menu ----------
const hamburger  = document.querySelector('.hamburger');
const mobileNav  = document.querySelector('.mobile-nav');

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav?.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---------- Scroll reveal (IntersectionObserver) ----------
const revealEls = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${id}`
        ? 'var(--color-primary)'
        : '';
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ---------- Animated number counters ----------
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1600;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out quad
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer   = item.querySelector('.faq-answer');

  question?.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    if (answer) {
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    }
    // close siblings
    item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(sibling => {
      if (sibling !== item) {
        sibling.classList.remove('open');
        const sAns = sibling.querySelector('.faq-answer');
        if (sAns) sAns.style.maxHeight = '0';
      }
    });
  });
});

// ---------- Course category filter ----------
const filterBtns   = document.querySelectorAll('.filter-btn');
const courseCards  = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    courseCards.forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
      // re-trigger reveal if hidden → visible
      if (show) card.classList.add('visible');
    });
  });
});

// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
