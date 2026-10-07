'use strict';

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    const wasOpen = parent.classList.contains('open');
    const items = document.querySelectorAll('.faq-item');

    for (let item of items) {
      item.classList.remove('open');
      item.querySelector('img').src = 'assets/images/icon-plus.svg';
    }

    if(!wasOpen) {
      parent.classList.add('open');
      parent.querySelector('img').src = 'assets/images/icon-minus.svg';
    }
  });
})