// AOS.init();
AOS.init({
  duration: 600,
  easing: "ease-in-quart",
  once: false,
  anchorPlacement: "top-center",
});
var wordsToType = document
    .querySelector("span[words]")
    .getAttribute("words")
    .split(","),
  typer = document.querySelector("span[words]"),
  typingSpeed = parseInt(typer.getAttribute("typing-speed")) || 70,
  typingDelay = parseInt(typer.getAttribute("typing-delay")) || 700;

var currentWordIndex = 0,
  currentCharacterIndex = 0;

function type() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];

  if (currentCharacterIndex < wordToType.length) {
    typer.innerHTML += wordToType[currentCharacterIndex++];
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingDelay);
  }
}
function erase() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];
  if (currentCharacterIndex > 0) {
    typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
    setTimeout(erase, typingSpeed);
  } else {
    currentWordIndex++;
    setTimeout(type, typingDelay);
  }
}

window.onload = function () {
  type();
};

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".header-items ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const scrollY = window.scrollY + window.innerHeight;

      if (scrollY > sectionTop && scrollY < sectionBottom) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("href").includes(current)) {
        li.classList.add("active");
      }
    });
  });
});
