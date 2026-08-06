// Users should be able to submit a form on the page to generate a new meme on the page

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const imageURL = document.getElementById("image-URL");
const form = document.querySelector("form");

let memeTopText = "";
let memeBottomText = "";
let memeURL = "";

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
    <h2 class = top-text>
      ${memeTopText}
    </h2>
    <h2 class = bottom-text>
      ${memeBottomText}
    </h2>
    `;
  newMeme.style.backgroundImage = `url('${memeURL}')`;
  newMeme.className = "meme";
  form.append(newMeme);
}

// They should be able to add **multiple memes** to the page by submitting the form multiple times
// Users should be able to click on a button to delete/remove a meme from the page
// The form boxes should clear out automatically after the submit is clicked
// The form fields need to have validation so they will not submit if a field is missing
