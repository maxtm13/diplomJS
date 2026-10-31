const scrollTop = (selectorBtn, idTopSection) => {
  const viewSection = document.getElementById(idTopSection);
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      const visible = !entry.isIntersecting;
      if (visible) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    },
    { threshold: 0 },
  );

  observer.observe(viewSection);

  const scrollBtn = document.querySelector(selectorBtn);
  const scrollToTop = function () {
    document.querySelector('#offer').scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  scrollBtn.addEventListener('click', scrollToTop);
};

export default scrollTop;
