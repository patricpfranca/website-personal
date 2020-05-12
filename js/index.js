const el = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 50) {
    el.classList.add("f-nav");
  } else {
    el.classList.remove("f-nav");
  }
});
