// Trailer video handler
const trailerModal = document.getElementById('trailerModal');

trailerModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  const video = button.getAttribute('data-video');
  const iframe = document.getElementById('trailerFrame');

  iframe.src = video + '?autoplay=1&rel=0';
});

trailerModal.addEventListener('hidden.bs.modal', () => {
  document.getElementById('trailerFrame').src = '';
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

// Pause movie carousel on hover
const movieCarouselEl = document.getElementById('movieCarousel');

movieCarouselEl.addEventListener('mouseenter', () => {
  bootstrap.Carousel.getInstance(movieCarouselEl).pause();
});
movieCarouselEl.addEventListener('mouseleave', () => {
  bootstrap.Carousel.getInstance(movieCarouselEl).cycle();
});

// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-link');
const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));

window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120;

  sections.forEach((sec, idx) => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(n => n.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
});
