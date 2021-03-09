const findButton = document.querySelector('.find__btn');
const findForm = document.querySelector('.find__form');
const findDate = document.querySelector('.find__input--date');
const adult = document.querySelector('.find__input--adult');
const children = document.querySelector('.find__input--children');
const searchButton = document.querySelector('.find__search');

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

try {
  storageAdult = localStorage.getItem('adult');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

findButton.addEventListener('click', function () {
  findForm.classList.toggle('find__form--hidden');

  if (storageAdult) {
    adult.value = storageAdult;
  }
  if (storageChildren) {
    children.value = storageChildren;
  }
  findDate.focus();

})

findForm.addEventListener('click', function (evt) {
  if (!findDate.value || !adult.value || !children.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adult', adult.value);
      localStorage.setItem('children', children.value);
    }
  }
})








