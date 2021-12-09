const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = "6e111b46"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;


// - Attach an event listener that simply logs the text value of the input
let textInput = document.querySelector("#blank");
let searchButton = document.querySelector("#search");

console.log(textInput);

const logText = (event) => {
  event.preventDefault();

  let value = textInput.value;
  console.log(value);
}

textInput.addEventListener("submit", logText);


//   - Next, add the `axios` api call.For searching, the url should look something like this: `http://www.omdbapi.com/?apikey=[yourkey]&s=[movietitle]`
//     - Remember to use `async` and `await` for the axios calls
//       - Try to `console.log` the search results.Or use the `network` tab in the dev tools + the preview tab for a request ot view its structure.
// ![dev tools](./devtools.png)