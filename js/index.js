const el = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 100) {
    el.classList.add("f-nav");
  } else {
    el.classList.remove("f-nav");
  }
});
