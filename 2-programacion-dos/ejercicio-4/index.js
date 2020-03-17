'use strict';
const totalPerson = 9;
const totalPay = 128;

let totalForPerson = totalPay / totalPerson - 2;
let totalAna = totalForPerson + 2;
let payPerson = 'Cada persona tiene que pagar ';
let payAna = 'Ana tiene que pagar ';
console.log(payPerson + totalForPerson + ' Euros');
console.log(payAna + totalAna + ' Euros');
