function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  let marker = document.querySelector('#menu-links');
  menu.classList.toggle("open");
  icon.classList.toggle("open");

}
