import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;

localStorageCheck();

formEl.addEventListener('input', throttle(onFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  if (email.value.trim() !== '' && message.value.trim() !== '') {
    const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(parsedData);

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  } else {
    alert('Введите валидные данные');
  }
}

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    evt.target.value = evt.target.value.trim();
  }

  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
}
function localStorageCheck() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    email.value = JSON.parse(savedData).email;
    message.value = JSON.parse(savedData).message;
  }
}
