export default function contactModal() {
  const contactBtn = document.querySelector('.nav-contact');
  const contactModal = document.querySelector('.contact-container');
  const closeBtn = document.querySelector('.contact__close');
  const contactForm = document.querySelector('.contact__form');
  const successForm = document.querySelector('.contact__success');
  const sendBtn = document.querySelector('.contact__btn');

  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();

    contactForm.classList.add('active');
    successForm.classList.remove('active');
    contactModal.classList.add('active');

    closeBtn.addEventListener('click', () => contactModal.classList.remove('active'));

    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();

      contactForm.classList.remove('active');
      successForm.classList.add('active');

      setTimeout(() => contactModal.classList.remove('active'), 3000);
    })
  })
}