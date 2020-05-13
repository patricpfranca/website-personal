const el = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 50) {
    el.classList.add("f-nav");
  } else {
    el.classList.remove("f-nav");
  }
});

window.onload = () => {
  const texts = ["Patric Pereira", "Developer"];
  let actual = 0;

  const elChangeText = document.getElementById("change-text");

  elChangeText.innerHTML = texts[actual++];

  setInterval(() => {
    if (actual >= texts.length) actual = 0;

    elChangeText.innerHTML = texts[actual++];
  }, 4000);
};
