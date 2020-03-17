'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Bruno';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

let listElement = document.querySelector('ul');
listElement.innerHTML = `<li><p>${firstDogName}</p><img src="${firstDogImage}"/></li>
      <li><p>${secondDogName}</p><img src="${secondDogImage}"/></li>
      <li><p>${thirdDogName}</p><img src="${thirdDogImage}"/></li>`;
