let randomNumber=parseInt(Math.random()*100 +1);

const submitButton=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const prevGuesses=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let prevGuess=[];
let numGuesses=1;
let playGame=true;

if(playGame)
{
  submitButton.addEventListener("click",function(e)
{
  e.preventDefault();
  const guess=parseInt(userInput.value)
  validateGuess(guess);
})
}
function validateGuess(guess)
{
  //
  if(isNaN(guess))
  {
    alert("Please enter a valid Number");
  }
  else if(guess<1 || guess >100)
  {
    alert("Please enter a valid Number");
  }
  else{
    prevGuess.push(guess);
    if(numGuesses===11)
    {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess)
{
  //
  if(guess===randomNumber)
  {
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if(guess<randomNumber)
  {
    displayMessage(`Number is TOO low`);
  }
  else if(guess>randomNumber)
  {
    displayMessage(`Number is TOO High`);
  }
}
function displayGuess(guess)
{
  userInput.value='';
  prevGuesses.innerHTML+=`${guess}, `;
  numGuesses++;
  remaining.innerHTML=`${11-numGuesses}`;


}
function displayMessage(message)
{
  //Dom Manip
  lowOrHi.innerHTML=`<h3>${message}</h3>`;
}

function newGame()
{
      const newGameBtn=document.querySelector("#newGame");
      newGameBtn.addEventListener('click',function()
    {
      randomNumber=parseInt(Math.random()*100 +1);
      prevGuess=[];
      prevGuesses.innerHTML="";
      numGuesses=1;
      remaining.innerHTML='10';
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame=true;
    })
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame"> start new Game</h2>`;
    p.style=''
    startOver.appendChild(p);
    playGame=false;
    newGame();
}