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
    console.log(movieData);
    // movieData.forEach((movieObj) => {
    //   renderList(movieObj);
    renderList(movieData);
    // renderList(movieData);
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

// function showMovieData(data) {
//   console.log(data);
//   const movieTitle = document.createElement("h3");
//   movieTitle.innerText = `${data.title}`;
//   movieList.appendChild(movieTitle);
// }


function renderList(movie) {
  //movie title
  // console.log(movie);
  const movieTitle = document.createElement("h2");
  movieTitle.innerText = movie.Title;
  movieList.appendChild(movieTitle);
  console.log(movieTitle);
  //director
  const movieDir = document.createElement("h3");
  movieDir.innerText = `Director: ${movie.Director}`;
  movieList.appendChild(movieDir);
  //release year
  const movieYear = document.createElement("h3");
  movieYear.innerText = `Release Year: ${movie.Year}`;
  movieList.appendChild(movieYear);
  //movie poster
  const moviePoster = document.createElement("img");
  moviePoster.src = movie.Poster;
  moviePoster.alt = `Movie poster for ${movie.Title}`
  movieList.appendChild(moviePoster);
  // console.log(moviePoster);

  // const movieTitle = document.createElement("h4");
  // movieTitle.innerText = `${data.country}`
  // movieList.appendChild(movieTitle);
};