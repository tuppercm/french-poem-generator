function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    cursor: "",
    delay: 5,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
