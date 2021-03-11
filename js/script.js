const findButton = document.querySelector('.find__btn');
const findForm = document.querySelector('.find__form--hidden');
const entering = document.querySelector('[name=entering]');
const departure = document.querySelector('[name=departure');
const adult = document.querySelector('[name=adult]');
const children = document.querySelector('[name=children]');

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
  findForm.classList.toggle('find__form');
  if (storageAdult) {
    adult.value = storageAdult;
  }
  if (storageChildren) {
    children.value = storageChildren;
  }
})

findForm.addEventListener('submit', function (evt) {
  if (!entering.value || !departure.value || !adult.value || !children.value) {
    evt.preventDefault();
    findForm.classList.add('find__search--err');
    findForm.addEventListener('animationend', function () {
      findForm.classList.remove('find__search--err');
    })
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem('adult', adult.value);
      localStorage.setItem('children', children.value);
    }
  }

})








