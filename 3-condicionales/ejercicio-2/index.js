'use strict';
let name = 'Bruno';
if  (name === 'Bruno' || name === 'Heidy') {
    document.querySelector('.name').innerHTML = `Bienvenid@ ${name}`;
} else {
    document.querySelector('.name').innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
}
