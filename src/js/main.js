import getTimeGreeting, { getGreeting } from './greeting.js';
import { createCounter, getStatus } from './counter.js';

const counter = createCounter(0);

const countEl  = document.getElementById('count');
const statusEl = document.getElementById('status');

function updateUI() {
  countEl.textContent  = counter.getCount();
  statusEl.textContent = getStatus(counter.getCount());
}

updateUI();

document.getElementById('increment').addEventListener('click', () => {
  counter.increment();
  updateUI();
});

document.getElementById('decrement').addEventListener('click', () => {
  counter.decrement();
  updateUI();
});

document.getElementById('reset').addEventListener('click', () => {
  counter.reset();
  updateUI();
});
