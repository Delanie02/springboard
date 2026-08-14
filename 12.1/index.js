// Exploring the API endpoints.

// async function giphyRequest() {
//   const response = await axios.get(
//     `http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
//   );
//   console.log(response.status); // 200
//   console.log(response.data); // object with data, meta, and pagination
//   console.log(response.data.data); // 50 objects
//   console.log(response.data.data[0]); // individual object with URL
//   console.log(response.data.data.length); // 50
//   console.log(response.data.data[0].images); // provides different image types, include original, downsized, etc.
//   console.log(response.data.data[0].rating); // g
// }
// giphyRequest();

// const testImg = document.getElementById("test");

// async function giphyRequest() {
//   const response = await axios.get(
//     `http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=10`,
//   );
//   // console.log(response.data.data);
//   // console.log(response.data.data.length); // 10
//   // console.log(response.data.data[0]);
//   // console.log(response.data.data[0].images);
//   console.log(response.data.data[0].images.downsized);
//   console.log(response.data.data[0].images.downsized.url);
//   console.log(response.data.data[0].images.downsized.height);
//   testImg.style.backgroundImage = `url('${response.data.data[0].images.downsized.url}')`;
//   testImg.style.height = `${response.data.data[0].images.downsized.height}px`;
//   testImg.style.width = `${response.data.data[0].images.downsized.width}px`;
// }
// giphyRequest();
// testImg.style.backgroundImage = `url('${response.data.data[0].images.downsized.url}')`;
// testImg.style.height = `${response.data.data[0].images.downsized.height}px`;
// testImg.style.width = `${response.data.data[0].images.downsized.width}px`;

// Start by building a simple form with an input for a search term and a submit button. When the user submits the form, use <axios> to make a request to GIPHY for information based on that term.

const searchText = document.getElementById("search-text");
const submitSearch = document.getElementById("submit-search");
const removeAll = document.getElementById("remove-all");
const form = document.getElementById("giphy-form");
const gifs = document.getElementById("gif-results");
const myApiKey = "685KW2SvLEhUINeQrW9xZnQqJBl1SywM";

let memeSearchText = "";
class Meme {
  constructor(url, height, width) {
    this.url = url;
    this.height = height;
    this.width = width;
  }
}

form.addEventListener("submit", newMeme);

async function newMeme(event) {
  event.preventDefault();

  memeSearchText = searchText.value;
  // console.log(memeSearchText);

  const gif = await getGif(memeSearchText, myApiKey);
  const { url, height, width } = gif;
  console.log(url, height, width);

  const meme = document.createElement("div");

  meme.innerHTML = `
    <button type='button' class='remove'>
      <i class='fa-solid fa-xmark'></i>
    </button>
  `;
  meme.style.backgroundImage = `url('${url}')`;
  meme.style.height = `${height}px`;
  meme.style.width = `${width}px`;
  meme.className = "meme";

  gifs.append(meme);
  form.reset();
}

async function getGif(searchTerm, apiKey) {
  try {
    const response = await axios.get("http://api.giphy.com/v1/gifs/translate", {
      params: {
        api_key: apiKey,
        s: searchTerm,
      },
    });
    // console.log(response);
    // console.log(response.data.data.images.downsized.url);

    let gif = new Meme(
      response.data.data.images.downsized.url,
      response.data.data.images.downsized.height,
      response.data.data.images.downsized.width,
    );

    console.log(gif);
    return gif;
  } catch (error) {
    console.log(error);
  }
}

gifs.addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button) {
    button.closest(".meme").remove();
  }
});

removeAll.addEventListener("click", function (e) {
  const memes = document.getElementsByClassName("meme");
  console.log(memes);
  Array.from(memes).forEach((meme) => meme.remove());
});
