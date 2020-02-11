const slides = [
  {
    page: 1,
    title: 'Mortal Kombat',
    price: 229.90,
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.'
  },
  {
    page: 2,
    title: 'Red Dead Redemption',
    price: 249.99,
    description: 'Cacilds vidis litro abertis. Atirei o pau no gatis, atirei o pau no gatis per gatis num morreus. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.'
  }
];

const slideTitle = document.querySelector('.slide-title');
const slideControl = document.querySelector('.slide-control');
const gameTitle = document.querySelector('.game-title');
const gamePrice = document.querySelector('.game-price');
const gameCents = document.querySelector('.game-cents');
const gameDescription = document.querySelector('.game-description');
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
    formattedPrice = slideInfo.price.toString().split('.')
    formattedCents = formattedPrice[1].length < 2 ? `,${formattedPrice[1]}0` : `,${formattedPrice[1]}`;

    slideTitle.innerText = slideInfo.title;
    slideControl.innerText = `${slideInfo.page} / ${slides.length}`;
    gameTitle.innerText = slideInfo.title;
    gamePrice.innerHTML = `R$ ${formattedPrice[0]}<span class="game-cents">${formattedCents}</span>`;
    gameDescription.innerText = slideInfo.description;
  });
});