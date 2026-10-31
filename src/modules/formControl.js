const formControl = (selector) => {
  const form = document.querySelector(selector);
  const name = form.querySelector('input[name="fio"]');
  const phone = form.querySelector('input[name="phone"]');
  const calcTotal = document.getElementById('calc-total');
  const validate = (input, preg, errorText = 'Ошибка') => {
    const valueInput = input.value;
    if (valueInput == '') return;
    if (preg.test(valueInput) !== true) {
      input.style.borderColor = 'red';
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error');
      errorDiv.innerText = errorText;
      input.before(errorDiv);
      return preg.test(valueInput);
    }
    input.style.borderColor = '#dfdfdf';

    return preg.test(valueInput);
  };
  const emptyInput = (form) => {
    const inputs = form.querySelectorAll('input:not([type="hidden"])');
    inputs.forEach((input) => {
      const errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerText = 'Поле не должно быть пустым';
      if (input.value === '') {
        input.before(errorElement);
      }
    });
  };
  const sendData = (data) => {
    // return fetch('https://jsonplaceholder.typicode.com/posts', {
    return fetch('form.php', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  };

  form.addEventListener('submit', (e) => {
    let status;
    e.preventDefault();

    if (document.querySelectorAll('.error').length > 0) document.querySelectorAll('.error').forEach((item) => item.remove());
    emptyInput(form);
    status = validate(name, /^[a-zа-я\s]+$/, 'Только русские и латинские буквы');

    status = status && validate(phone, /^\+?[0-9]+$/, 'Могут быть только + и цифры');

    if (status) {
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        formBody[key] = val;
      });
      if (calcTotal && calcTotal.value) {
        formBody['calc-total'] = calcTotal.value;
      }
      sendData(formBody)
        .then(() => {
          form.reset();
        })
        .catch((error) => {
          console.log('Ошибка при отправке ', error);
        });
    }
  });
};

export default formControl;
