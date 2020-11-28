import './style.scss';

import moment from 'moment';

let time = document.querySelector('time');

let milliseconds = Number(time.dataset.milliseconds);

let m = moment(milliseconds);

time.textContent = m.fromNow();
