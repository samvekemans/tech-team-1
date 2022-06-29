const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.previous');
const carouselWrapper = document.querySelector('.x-overflow');
const carouselItem = document.querySelector('.section');

nextButton.addEventListener('click', () => {
  carouselWrapper.scrollLeft += carouselItem.clientWidth;
});

prevButton.addEventListener('click', () => {
  carouselWrapper.scrollLeft -= carouselItem.clientWidth;
});
