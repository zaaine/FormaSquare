
const menuElementsToToggle: NodeListOf<HTMLElement> = document.querySelectorAll(".toggle-menu");
const iconeToggle: HTMLElement | null = document.querySelector(".icone-toggle");


const toggleMenu = (): void => {
  menuElementsToToggle.forEach((el: HTMLElement) => {
    el.classList.toggle("hidden");
  });
};


if (iconeToggle) {
  iconeToggle.addEventListener("click", toggleMenu);
}


const navbarLinks: NodeListOf<HTMLElement> = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link: HTMLElement) => {
  link.addEventListener("click", toggleMenu);
});