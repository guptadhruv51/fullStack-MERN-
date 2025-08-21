const parentElement=document.querySelector(".main")
const searchInput=document.querySelector(".input");
const movieRating=document.querySelector(".rating-select");
let searchValue="";
let filteredArray=[];
let ratings=0;
const FILE_PATH = "./movies.json";

const getMovies = async (filePath) => {
  try {
    const response = await fetch(filePath);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const movies = await response.json();
    return movies;
  } catch (err) {
    console.error('Error loading movies:', err);
    throw err;
  }
};

// Usage
let movies = await getMovies(FILE_PATH);


const createElement=(element)=>document.createElement(element);

//Function to create movie cards

const createMovieCard=(movies)=>
{
  console.log("inside func");
 for(let movie of movies)
 {
  // Creating parent container for card
  const cardContainer=createElement("div");
  cardContainer.classList.add("card","shadow");


  // Creating Image container

  const imageContainer=createElement("div");
  imageContainer.classList.add("card-image-container");


  // card image

  const imgElement=createElement("img");
  imgElement.classList.add("card-image");
  imgElement.setAttribute("src",movie.poster);
  imgElement.setAttribute("alt",movie.title);
  imageContainer.appendChild(imgElement);
  cardContainer.appendChild(imageContainer);

  //Card Detail Container

  const cardDetails=createElement("div");
  cardDetails.classList.add("movie-details");

  const title=createElement("p");
  title.classList.add("title");
  title.innerText=movie.title;
  cardDetails.appendChild(title);

  const year=createElement("p");
  year.classList.add("year");
  year.innerText=`Year: ${movie.year}`;
  cardDetails.appendChild(year);

  // Ratings Container

  const movieRating=createElement("div");
  
  movieRating.classList.add("ratings");

  const starRating=createElement("div");

  starRating.classList.add("star-rating");

  const starIcon=createElement("span");

  starIcon.classList.add("material-icons-outlined");

  starIcon.innerText="star";

  starRating.appendChild(starIcon);

  const ratingCount=createElement("span");

  ratingCount.innerText=movie.rating;

  starRating.appendChild(ratingCount);

  const duration=createElement("p");

  duration.innerText="137 mins"

  movieRating.appendChild(starRating);

  movieRating.appendChild(duration);


  cardDetails.appendChild(movieRating);

  cardContainer.appendChild(cardDetails);
  parentElement.appendChild(cardContainer);

 }
};

function getFilteredData()
{
  
  filteredArray=searchValue?.length>0?movies.filter(movie=>searchValue===movie.title.toLowerCase()):movies;
  // createMovieCard(filteredArray);
  
  if(ratings>0)
  {
      filteredArray=filteredArray.filter(movie=>movie.rating>=ratings);

  }
  return filteredArray;
}

function handleSearch(event)
{
  searchValue=event.target.value.toLowerCase();
  let filterBySearch=getFilteredData();
  console.log(filteredArray);
  parentElement.innerHTML="";
  createMovieCard(filterBySearch);
}

function debounce(callback,delay)
{
  let timerID;
  return (...args)=>
  {
    clearTimeout(timerID);
    timerID=setTimeout(()=>
    {
      callback(...args);
    },delay)
  }
}




const debounceInput=debounce(handleSearch,700);
searchInput.addEventListener("keyup",debounceInput);

function handleRatingSelector(event)
{
    ratings=event.target.value;
    let filterbyRating=getFilteredData();
    parentElement.innerHTML="";
  createMovieCard(ratings?filterbyRating:movies);

}
movieRating.addEventListener("change",handleRatingSelector);


createMovieCard(movies);
