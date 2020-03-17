'use strict';
const avatar_default= 'http://placehold.it/300x300';
let avatar_user = '';

const image= document.querySelector('.image');

if (avatar_user === '') {
    image.src = avatar_default;
} else {
    image.src = 'http://www.fillmurray.com/300/300';
}
