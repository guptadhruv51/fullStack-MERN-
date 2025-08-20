const parentElement=document.querySelector(".main")
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
}

createMovieCard(movies);
