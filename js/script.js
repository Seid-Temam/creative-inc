const yearEl = document.querySelector('.year');
const currentYr = new Date().getFullYear();
yearEl.textContent = currentYr;

$(document).ready(function () {
  $('.menu-outline').on('click', function () {
    $('nav').toggleClass('is-open');
    $('.menu-outline').toggleClass('is-open');
    $('.close-outline').toggleClass('is-open');
  });

  $('.close-outline').on('click', function () {
    $('nav').toggleClass('is-open');
    $('.menu-outline').toggleClass('is-open');
    $('.close-outline').toggleClass('is-open');
  });

  $('.main-links').on('click', function () {
    $('nav').toggleClass('is-open');
    $('.menu-outline').toggleClass('is-open');
    $('.close-outline').toggleClass('is-open');
  });
});
