const slides = [
  {
    page: 1,
    title: 'Mortal Kombat'
  },
  {
    page: 2,
    title: 'Red Dead Redemption'
  }
];

const slideTitle = document.querySelector('.slide-title');
const slideControl = document.querySelector('.slide-control');
let currentSlide = 0;

// Start Slick
$(document).ready(function(){
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="./src/svgs/angle-left-solid.svg"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./src/svgs/angle-right-solid.svg"/></button>'
  });

  $('.slider').on('beforeChange', () => {
    currentSlide++;
    slideInfo = slides[currentSlide % slides.length];

    slideTitle.innerText = slideInfo.title
    slideControl.innerText = `${slideInfo.page} / ${slides.length}`
  })
});