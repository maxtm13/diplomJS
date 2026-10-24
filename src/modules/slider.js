const slider = () => {
  const nextSlide = document.querySelector('.benefits__arrow--right');
  const prevSlide = document.querySelector('.benefits__arrow--left');
  // const countActiveSlides = 3;
  // const slider = document.querySelector('.benefits-inner');
  const arrows = document.querySelector('.benefits-arrows');
  const slides = document.querySelectorAll('.benefits__item');
  const countSlides = slides.length;
  const count = 0;
  const countActiveslides = window.innerWidth > 576 ? 3 : 1;
  const initSliders = () => {
    slides.forEach((item, index) => {
      item.setAttribute('data-index', index);
      if (index < countActiveslides) {
        item.setAttribute('data-active', '');
        item.classList.add('active');
      }
    });
  };
  const showSlides = (direction) => {
    if (direction === 'next') {
      const firstSlideIndex = slides[0].parentElement.querySelector('[data-active]').getAttribute('data-index');
      console.dir(firstSlideIndex);
    }
  };
  initSliders();
  arrows.addEventListener('click', (e) => {
    if (e.target === nextSlide || e.target.parentElement === nextSlide) {
      console.log('next');
      showSlides('next');
    } else if (e.target === prevSlide || e.target.parentElement === prevSlide) {
      console.log('prev');

      // console.log('left');
    }
    // slides.forEach((item, index) => {
    //   if (index < count) {
    //     // item.classList.add('fadeOutLeft', 'animated');
    //     item.style.display = 'none';
    //     // item.addEventListener('animationend', () => {
    //     //   item.style.display = 'none';
    //     // });
    //   } else {
    //     item.style.display = 'block';
    //     // item.classList.remove('fadeOutLeft');
    //     // item.classList.add('fadeInLeft', 'animated');
    //   }
    // });
  });
};

export default slider;
