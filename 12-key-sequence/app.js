'use strict';

const pressed = [];
const secretCode = 'evyhaan';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }

  console.log(pressed);
});
