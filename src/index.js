function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Loading a Poem for You..."],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
