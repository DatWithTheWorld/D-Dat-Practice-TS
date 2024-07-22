const inputValidationRules = {
  name: /^[a-z]+$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  inputMin: 5,
};

const inputCollection = {
  name: 'name',
  email: 'email',
  password: 'password',
};

const handleValidate = (input: HTMLInputElement, condition: boolean, injectClass: string) => {
  if (condition) {
    input.classList.remove(injectClass);
  } else {
    input.classList.add(injectClass);
  }
};

const checkInput = (e: Event, eventType: string) => {
  const inputTarget = e.target as HTMLInputElement;
  const inputValue = inputTarget.value;
  const inputName = inputTarget.name;
  if (
    inputTarget.type === 'text' ||
    inputTarget.type === 'password' ||
    inputTarget.type === 'email'
  ) {
    switch (eventType) {
      case 'blur':
      case 'change': {
        const inputValidate = (inputValidationRules[inputName as keyof typeof inputValidationRules] as RegExp).test(inputValue);
        if (inputValue.length <= 0) {
          handleValidate(inputTarget, false, 'invalid');
        } else if (inputValue.length < inputValidationRules.inputMin) {
          handleValidate(inputTarget, false, 'invalid');
        }
        if (inputTarget.type === 'text') {
          if (inputValidationRules.name.test(inputValue)) {
            handleValidate(inputTarget, true, 'invalid');
            inputTarget.classList.remove('error');
          } else {
            handleValidate(inputTarget, false, 'invalid');
            inputTarget.classList.add('error');
          }
        }
        if (inputTarget.type === 'password') {
          if (inputValidationRules.password.test(inputValue)) {
            handleValidate(inputTarget, true, 'invalid');
            inputTarget.classList.remove('error');
          } else {
            handleValidate(inputTarget, false, 'invalid');
            inputTarget.classList.add('error');
          }
        }
        if (inputTarget.type === 'email') {
          if (inputValidationRules.email.test(inputValue)) {
            handleValidate(inputTarget, true, 'invalid');
            inputTarget.classList.remove('error');
          } else {
            handleValidate(inputTarget, false, 'invalid');
            inputTarget.classList.add('error');
          }
        }
        if (!inputValidate) {
          handleValidate(inputTarget, inputValidate, 'invalid');
          break;
        }
        break;
      }
      default:
        break;
    }
  } else if (inputTarget.type === 'file') {
    switch (eventType) {
      case 'change': {
        const inputValidate = (inputValidationRules[inputName as keyof typeof inputValidationRules] as RegExp).test(inputValue);
        if (!inputValidate) {
          handleValidate(inputTarget, inputValidate, 'invalid');
          break;
        }
        break;
      }
      default:
        break;
    }
  }
};

const validate = (form: HTMLFormElement) => {
  const textInput = form.querySelectorAll('input');

  [...textInput].forEach((item) => {
    item.addEventListener('blur', (e) => {
      checkInput(e, 'blur');
    });
    item.addEventListener('change', (e) => {
      checkInput(e, 'change');
    });
  });
};

export default validate;