'use strict';
const dog = 4;

if (dog === 1) {
    console.log("El perro tiene 15 años humanos");
} else if (dog === 2) {
    console.log("El perro tiene 24 años humanos");
} else if (dog === 3) {
    console.log("El perro tiene 29 años humanos");
} else if (dog > 3) {
    let Human = 29 + (dog - 3) * 5;
    console.log("El perro tiene " + Human + ' años humanos');
}
