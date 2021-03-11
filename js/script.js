const find = document.querySelector('.find')
const findButton = find.querySelector('.find__btn');
const findForm = find.querySelector('.find__form--hidden');
const findEntering = findForm.querySelector('[name=entering]');
const findDeparture = findForm.querySelector('[name=departure');
const findAdult = findForm.querySelector('[name=adult]');
const findChildren = findForm.querySelector('[name=children]');

let isStorageSupport = true;
let storageAdult = '';
let storageChildren = '';

try {
  storageAdult = localStorage.getItem('adult');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

findButton.addEventListener('click', function () {
  findForm.classList.toggle('find__form');
  if (storageAdult) {
    findAdult.value = storageAdult;
  }
  if (storageChildren) {
    findChildren.value = storageChildren;
  }
})

findForm.addEventListener('submit', function (evt) {
  if (!findEntering.value || !findDeparture.value || !findAdult.value || !findChildren.value) {
    evt.preventDefault();
    findForm.classList.add('find__search--err');
    findForm.addEventListener('animationend', function () {
      findForm.classList.remove('find__search--err');
    })
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem('adult', findAdult.value);
      localStorage.setItem('children', findChildren.value);
    }
  }
})








