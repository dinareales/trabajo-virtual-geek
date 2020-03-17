'use strict';
const divElement = document.querySelector('.div');

if (divElement.classList.contains('success')) {
    divElement.innerHTML='<h1>CORRECTO</h1><p>Los datos son correctos</p>';
}
else if (divElement.classList.contains('error')) {
    divElement.innerHTML='<h1>ERROR</h1><p>Ha surgido un error</p>';
}
else if (divElement.classList.contains('warning')) {
    divElement.innerHTML='<h1>AVISO</h1><p>Tenga cuidado</p>';
}
