/* ─────────────────────────────────────────────────────────
   OM SPICES · script.js
   Navigation scroll, reveal animations, interaction polish
───────────────────────────────────────────────────────── */

(function () {
  'use strict';

  // ── NAV SCROLL BEHAVIOUR ──────────────────────────────
  const nav = document.getElementById('main-nav');

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── SCROLL REVEAL ─────────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.pillar-card, .cat-card, .product-card, .testimonial-card, ' +
    '.origin-panel, .feature-item, .section-header, ' +
    '.story-text-col, .story-image-col, .bundle-text, ' +
    '.newsletter-inner, .hero-badge, .hero-headline, .hero-sub, ' +
    '.hero-cta-group, .hero-trust'
  );

  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    // Stagger within grids
    const parent = el.parentElement;
    if (parent) {
      const siblings = parent.querySelectorAll(':scope > .reveal');
      const idx = Array.from(siblings).indexOf(el);
      if (idx < 4) {
        el.classList.add('reveal-delay-' + idx);
      }
    }
  });

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function (el) { io.observe(el); });

  // ── ADD TO CART FEEDBACK ──────────────────────────────
  const addBtns = document.querySelectorAll('.btn-add');

  addBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.style.background = 'var(--brass-dark)';
      setTimeout(function () {
        btn.textContent = original;
        btn.style.background = '';
      }, 1800);
    });
  });

  // ── NEWSLETTER FORM ───────────────────────────────────
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');
  const submitBtn = document.getElementById('newsletter-submit');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        emailInput.style.borderColor = 'rgba(200, 80, 80, 0.6)';
        return;
      }
      submitBtn.textContent = 'Subscribed ✓';
      submitBtn.style.background = 'var(--brass-dark)';
      emailInput.value = '';
      emailInput.style.borderColor = '';
      setTimeout(function () {
        submitBtn.textContent = 'Subscribe';
        submitBtn.style.background = '';
      }, 3000);
    });

    emailInput.addEventListener('input', function () {
      emailInput.style.borderColor = '';
    });
  }

  // ── SMOOTH ANCHOR SCROLL ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── MARQUEE PAUSE ON HOVER ────────────────────────────
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeStrip = document.querySelector('.marquee-strip');

  if (marqueeStrip && marqueeTrack) {
    marqueeStrip.addEventListener('mouseenter', function () {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeStrip.addEventListener('mouseleave', function () {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  // ── IMAGE LAZY LOAD FADE-IN ───────────────────────────
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  lazyImgs.forEach(function (img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', function () {
        img.style.opacity = '1';
      });
    }
  });

  // ── HERO IMAGE PARALLAX ───────────────────────────────
  const heroImg = document.querySelector('.hero-img');
  if (heroImg && window.innerWidth > 768) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = 'translateY(' + scrolled * 0.25 + 'px)';
      }
    }, { passive: true });
  }

})();
