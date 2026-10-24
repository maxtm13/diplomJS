const modal = () => {
  const modalButtons = document.querySelectorAll('.fancyboxModal');
  const callBackForm = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const closeBtn = callBackForm.querySelector('.header-modal__close');
  modalButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const callbackBox = e.target.getAttribute('href').match(/\w+/gi)[0];
      console.log(callbackBox);

      if (callbackBox === 'callback') {
        console.log(callbackBox);

        callBackForm.style.display = 'block';
        overlay.style.display = 'block';
      }
    });
  });
  closeBtn.addEventListener('click', () => {
    callBackForm.style.display = 'none';
    overlay.style.display = 'none';
  });
};
export default modal;
