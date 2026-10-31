import { animate } from './helper';
const serts = () => {
  const selector = '.sertificate-document';
  const body = document.querySelector('body');
  const overlay = document.createElement('div');
  const imgPosition = 105;
  const startPosition = -100;

  const openImg = () => {
    animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        document.querySelector('.zoom-image').style.top = startPosition + progress * imgPosition + '%';
      },
    });
  };
  overlay.classList.add('docs_overlay');
  body.addEventListener('click', (e) => {
    if (e.target.closest(selector)) {
      e.preventDefault();
      const url = e.target.closest(selector).getAttribute('href');
      body.style.position = 'relative';
      const overlay = document.createElement('div');

      overlay.classList.add('docs_overlay');
      body.append(overlay);
      body.classList.add('dont_scroll');
      const imageSert = document.createElement('img');
      imageSert.classList.add('zoom-image');
      imageSert.setAttribute('src', url);
      body.append(imageSert);
      openImg();
    } else if (e.target.closest('.zoom-image')) {
      return;
    } else {
      body.classList.remove('dont_scroll');

      if (document.querySelector('.docs_overlay')) {
        document.querySelector('.docs_overlay').remove();
        document.querySelector('.zoom-image').remove();
      }
    }
  });
};
export default serts;
