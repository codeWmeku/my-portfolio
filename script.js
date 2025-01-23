function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  element.scrollIntoView({
    behavior: 'smooth', 
    block: 'start', 
    inline: 'nearest' 
  });
}
