let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");
const itemMenu = document.querySelector(".item-menu");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target && e.target.matches("li a.item-menu")) {
    menuSection.classList.toggle("on", show);
    show = !show;
  }
});
