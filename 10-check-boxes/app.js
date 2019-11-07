'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // check if shift key down
  // AND check that they are checking it
  if (e.shiftKey && this.checked) {
    // do the thang
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('starting to check them in between');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });

  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
