import showLightbox from './lightbox.js';

export default function startProductSlides() {

  const productsSlider = document.querySelector('.featured-products__slider');
  const bagAmountEl = document.querySelector('.bag-amount');
  let bagAmount = 0;

  axios.defaults.baseURL = 'http://localhost:3333';
  axios
    .get('/products')
    .then(res => {
      for(let product of res.data) {
        const price = product.price.toString().split('.');
        const formattedPrice = price[0];
        const formattedCents = price[1].length < 2 ? `${price[1]}0` : price[1];

        const productCard = `
          <div class="featured-product__card">
            <img class="featured-product__img" src="${product.image}"/>
            <p class="featured-product__title">${product.name}</p>
            <p class="featured-product__price">
              R$ ${formattedPrice} <span class="featured-product__cents">,${formattedCents}</span>
            </p>
            <button class="featured-product__btn">Comprar</button>
          </div>
        `

        productsSlider.innerHTML += productCard;
      }

      const buyBtns = document.querySelectorAll('.featured-product__btn');
      buyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          showLightbox(true);
          bagAmount++;
          bagAmount <= 99 ? bagAmountEl.innerText = bagAmount : bagAmountEl.innerText = '99+';
        })
      });
    })
    .then(() => {
      $('.featured-products__slider').slick({
        prevArrow: '<button type="button" class="featured-products__btn-prev"><img src="./src/svgs/angle-left-solid-blue.svg"/></button>',
        nextArrow: '<button type="button" class="featured-products__btn-next"><img src="./src/svgs/angle-right-solid-blue.svg"/></button>',
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              infinite: true,
            }
          }
        ]
      });
    });

}
