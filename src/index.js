function displayPoem(response) {
  new Typewriter("#poem", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-field");
  let apiKey = "cbab4a1ta01fc9fe9f10bf357f41o145";
  let prompt = `Generate a poem about ${inputElement.value}`;
  let context =
    "you are a helpful assistant. let the poem be short and sweet, with a touch of whimsy and emotion. Make sure to limit the poem to 6 lines in basic html. Wrap the lines with <li> tags. Justify the lines. Sign the poem with <strong>Come Away with Me, Ontibile.</strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> Generating a poem about ${inputElement.value}...</div>`;

  console.log(`generatePoem called with input: ${inputElement.value}`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
