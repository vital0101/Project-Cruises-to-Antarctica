const checkbox = document.querySelector('input[type="checkbox"]');
const textValidation = document.querySelector('form span');
const btnSubmit = document.querySelector('.form button');

const addValidateForm = () => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      btnSubmit.removeAttribute('disabled');
      textValidation.style.display = 'none';
    } else {
      btnSubmit.setAttribute('disabled', true);
      textValidation.style.display = 'block';
    }
  });
};

export {addValidateForm};
