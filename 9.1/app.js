const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const imageURL = document.getElementById("image-URL");
const form = document.querySelector("form");
const body = document.querySelector("body");

let memeTopText = "";
let memeBottomText = "";
let memeURL = "";

document.addEventListener(
  "invalid",
  function (e) {
    e.preventDefault();
  },
  true,
);

// Users should be able to submit a form on the page to generate a new meme on the page. They should be able to add **multiple memes** to the page by submitting the form multiple times.

form.addEventListener("submit", newMeme);

function newMeme(event) {
  event.preventDefault();

  memeTopText = topText.value;
  memeBottomText = bottomText.value;
  memeURL = imageURL.value.trim();

  console.log(memeTopText);
  console.log(memeBottomText);
  console.log(memeURL);

  const newMeme = document.createElement("div");

  newMeme.innerHTML = `
    <button type = "button">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="top-text">
    </h2>
    <h2 class="bottom-text">
    </h2>
    `;
  newMeme.querySelector(".top-text").textContent = `${memeTopText}`;
  newMeme.querySelector(".bottom-text").textContent = `${memeBottomText}`;
  newMeme.style.backgroundImage = `url('${memeURL}')`;
  newMeme.className = "meme";
  body.append(newMeme);

  // The form boxes should clear out automatically after the submit is clicked. Initially I reset the values to empty strings, but that triggered the invalid states to show so I asked Copilot and it suggested form reset instead, which works.
  form.reset();
  // topText.value = "";
  // bottomText.value = "";
  // imageURL.value = "";
}

// Users should be able to click on a button to delete/remove a meme from the page. I originally had the listener on the button itself and just as "e.target.remove" and asked Copilot why it wasn't working, which revealed two problems. One, I needed event delegation since the button doesn't exist until a meme is created. So I adjusted the listener to the parent, the form. Then I adjusted the remove to be on the parent element, which is the meme. When I changed my button to be an icon, this broke the button because now the parent was the button. I asked Copilot and it suggested the closest method below..

body.addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button) {
    button.closest(".meme").remove();
  }
});
