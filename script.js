'use strict';

const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

btn.addEventListener('click', function () {
  console.log('Clicked');
  modal.classList.remove('hidden');
});

close.addEventListener('click', function () {
  modal.classList.add('hidden');
});
