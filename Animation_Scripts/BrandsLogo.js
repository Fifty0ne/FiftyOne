(function() {
  const carousel = document.querySelector('.logo-carousel');
  const track = carousel.querySelector('.logo-track');

  let speed = window.innerWidth < 600 ? 0.5 : 0.15; // pixels per frame
  let rafId, isPaused = false;

  window.addEventListener('resize', () => {
    speed = window.innerWidth < 600 ? 0.15 : 0.5;
  });

  function step() {
    if (!isPaused) {
      carousel.scrollLeft += speed;

      const first = track.children[0];
      if (first) {
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const firstWidth = first.getBoundingClientRect().width + gap;

        if (carousel.scrollLeft >= firstWidth) {
          track.appendChild(first);
          carousel.scrollLeft -= firstWidth;
        }
      }
    }
    rafId = requestAnimationFrame(step);
  }

  window.addEventListener('load', () => {
    carousel.scrollLeft = 0;
    rafId = requestAnimationFrame(step);
  });

  carousel.addEventListener('mouseenter', () => { isPaused = true; });
  carousel.addEventListener('mouseleave', () => { isPaused = false; });
})();