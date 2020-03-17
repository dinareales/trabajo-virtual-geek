'use strict';
let  dayYear = 365;
let hourDay = 24;
let hourYear = dayYear * hourDay;
let age = document.querySelector('h1').innerHTML;

let totalHour = hourYear * parseInt(age);
console.log(`Una persona de ${age} años ha vivido ${totalHour} horas`);
