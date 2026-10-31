const calc = () => {
  // const caclForm = document.getElementById('calc');
  let optionType;
  let square;
  let total;
  let meterialType = 1;
  const calcInput = document.getElementById('calc-input');
  const calcType = document.getElementById('calc-type');
  const calcTypeMaterial = document.getElementById('calc-type-material');
  const calcTotal = document.getElementById('calc-total');
  const calculation = () => {
    if (optionType && square) {
      total = square * optionType * meterialType;
      calcTotal.value = total;
    } else return;
  };

  // console.log('calcInput', calcInput);
  // console.dir(calcType);
  if (document.getElementById('calc-type') !== null) {
    calcType.addEventListener('change', () => {
      optionType = calcType.selectedIndex;
      if (optionType === 0) {
        calcType.insertAdjacentHTML('beforebegin', '<div class="error">Поле не может быть пустым</div>');
      } else {
        if (calcType.parentElement.querySelector('.error')) {
          calcType.parentElement.querySelector('.error').remove();
        }
        calculation();
      }
    });
    calcInput.addEventListener('input', (e) => {
      const cleaned = e.target.value.replace(/\D/g, '');
      if (cleaned == '') {
        if (calcInput.parentElement.querySelector('.error') === null)
          calcInput.insertAdjacentHTML('beforebegin', '<div class="error">Поле не может быть пустым</div>');
      } else {
        if (calcInput.parentElement.querySelector('.error')) {
          calcInput.parentElement.querySelector('.error').remove();
        }
        e.target.value = cleaned;
        square = cleaned;
        calculation();
      }
    });
    calcTypeMaterial.addEventListener('change', () => {
      meterialType = +calcTypeMaterial.selectedIndex;
      meterialType = meterialType === 0 ? 1 : meterialType;
      calculation();
    });
  }
};

export default calc;
