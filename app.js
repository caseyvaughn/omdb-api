const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = "6e111b46"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;


// - Attach an event listener that simply logs the text value of the input
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#blank");
const movieList = document.querySelector(".movie-list")


async function fetchData(movie) {
  try {
    const url = `http://www.omdbapi.com/?apikey=6e111b46&t=${movie}&=`
    const response = await axios.get(url);
    const movieData = response.data;
    // .search;
    // console.log(movieData);
    renderList(movieData);
  } catch (error) {
    console.log("ERROR!!!");
  }
}

searchForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  // console.log(searchInput.value);
  let inputValue = searchInput.value;
  searchInput.value = "";
  fetchData(inputValue);
}


// - Next, write a function `renderList` that receives an array of "movie" objects as a parameter.  Call `renderList` from the event handler you wrote in the previous step and pass it the Search results from the axios response
// - `renderList` should iterate over the movies it receives as an argument and insert the movie data from each object into the DOM as a new HTML element.

function showMovieData(data) {
  console.log(data);
  const movieTitle = document.createElement("h3");
  movieTitle.innerText = `${data.title}`;
  movieList.appendChild(movieTitle);
}


function renderList(movieData) {
  movieData.forEach((movie) => {
    console.log(movie.Title);
  })
}