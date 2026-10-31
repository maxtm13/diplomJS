const slider = (sliderWrapperSel, slideSel, nextBtnSel, prevBtnSel, slidesToShowDesktop) => {
  const sliderWrapper = document.querySelector(sliderWrapperSel);
  if (!sliderWrapper) return;

  const slides = sliderWrapper.querySelectorAll(slideSel);
  const nextBtn = document.querySelector(nextBtnSel);
  const prevBtn = document.querySelector(prevBtnSel);

  if (!slides.length) return;

  let currentSlide = 0;

  const getSlidesToShow = () => (window.innerWidth >= 576 ? slidesToShowDesktop : 1);

  const renderSlides = () => {
    const slidesToShow = getSlidesToShow();
    if (currentSlide > slides.length - slidesToShow) {
      currentSlide = Math.max(0, slides.length - slidesToShow);
    }

    slides.forEach((slide, index) => {
      if (index >= currentSlide && index < currentSlide + slidesToShow) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  };

  renderSlides();

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const slidesToShow = getSlidesToShow();
      currentSlide++;
      if (currentSlide > slides.length - slidesToShow) {
        currentSlide = 0;
      }
      renderSlides();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const slidesToShow = getSlidesToShow();
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - slidesToShow;
      }
      renderSlides();
    });
  }

  window.addEventListener('resize', () => {
    renderSlides();
  });
};

export default slider;
