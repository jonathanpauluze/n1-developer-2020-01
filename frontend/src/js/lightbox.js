export default function showLightbox(status) {
  const lightbox = document.querySelector('.lightbox-container');
  const closeBtn = document.querySelector('.lightbox__close');
  
  if(status) {
    lightbox.classList.add('active');
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  }
}