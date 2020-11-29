import './style.scss';

import moment from 'moment';
import Swal from 'sweetalert2';

[...document.querySelectorAll('time')].forEach(
  time =>
    (time.textContent = moment(Number(time.dataset.milliseconds)).fromNow())
);

document.querySelector('form').onsubmit = event => {
  event.preventDefault();
  let form = event.target;

  fetch(form.action, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(form),
  });

  Swal.fire(`📬 Thanks`, 'Your message was sent', 'success').then(_ =>
    form.reset()
  );
};

// create a custom form by running this snippet in the console on your
// Google Form preview page

// let action = document.querySelector('form').action;
// let form = document.createElement('form');
// form.action = action;

// let fields = [...document.querySelectorAll('[data-params]')]
//   .map(x => x.dataset.params.match(/"([\w\s]+)".+\[(\d+)/).slice(1))
//   .map(([title, id]) => ({title, name: `entry.${id}`}));

// for (let field of fields) {
//   let label = document.createElement('label');
//   let input = document.createElement('input');

//   label.textContent = field.title;

//   input.type = 'text';
//   input.name = field.name;
//   input.required = true;

//   form.append(label, input);
// }

// let submit = document.createElement('input');
// submit.type = 'submit';
// submit.value = 'Send';

// form.append(submit);

// console.clear();
// console.log(form.outerHTML);
