export default function startSlides() {

  const slideTitle = document.querySelector('.slide-title');
  const slideControl = document.querySelector('.slide-control');
  let currentSlide = 0;

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


  // Start Slick
  $(document).ready(function(){
    $('.slider').slick({
      prevArrow: '<button type="button" class="slider-controller__prev"><img src="./src/svgs/angle-left-solid.svg"/></button>',
      nextArrow: '<button type="button" class="slider-controller__next"><img src="./src/svgs/angle-right-solid.svg"/></button>'
    });

    $('.slider').on('beforeChange', () => {
      currentSlide++;
      const slideInfo = slides[currentSlide % slides.length];

      slideTitle.innerText = slideInfo.title;
      slideControl.innerText = `${slideInfo.page} / ${slides.length}`;
    });
  });

}