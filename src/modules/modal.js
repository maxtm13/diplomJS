const modal = (btns, modalWindow, closeBtnSelector) => {
  const modalButtons = document.querySelectorAll(btns);
  const callBackForm = document.querySelector(modalWindow);
  const overlay = document.querySelector('.overlay');
  const closeBtn = callBackForm.querySelector(closeBtnSelector);
  modalButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      callBackForm.style.display = 'block';
      overlay.style.display = 'block';
    });
  });
  closeBtn.addEventListener('click', () => {
    callBackForm.style.display = 'none';
    overlay.style.display = 'none';
  });
};
export default modal;
