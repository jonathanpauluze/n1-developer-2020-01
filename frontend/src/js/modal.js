export default function handleModal() {
  
  const menuBtn = document.querySelector('.menu-hamburger');
  const menuModal = document.querySelector('.modal-menu');

  menuBtn.addEventListener('click', () => {
    menuModal.classList.toggle('active');
  });

}