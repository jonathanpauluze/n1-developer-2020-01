export default function handleScroll() {
  const header = document.querySelector('.header');

  window.onscroll = () => checkScrollTop();

  function checkScrollTop() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}