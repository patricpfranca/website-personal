const el = document.getElementById("container");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 50) {
    el.classList.add("f-nav");
  } else {
    el.classList.remove("f-nav");
  }
});

const TypeWriter = function (txtElement, words, waitTime = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(waitTime, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
