const cross = document.querySelector('.bi-x-circle');
const banner = document.querySelector('.top-banner');
const section = document.querySelectorAll('.big-feature');

const featureSection = document.querySelector('.big-feature');

cross.addEventListener('click', () => {
  banner.style.opacity = '0';
  banner.style.position = 'absolute';
  banner.style.color = '#494949';
});

const option = { threshold: 0.1 };

const callBack = function (events) {
  const [event] = events;
  console.log(event);
  if (!event.isIntersecting) return;
  event.target.classList.remove('section--hidden');
  featureSectionObserver.unobserve(event.target);
};

const featureSectionObserver = new IntersectionObserver(callBack, option);

// featureSectionObserver.observe(featureSection);
section.forEach(el => featureSectionObserver.observe(el));
