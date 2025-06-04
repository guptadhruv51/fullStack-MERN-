//generate a random color

const randomCOlor=function()
{
  const hex="0123456789ABCDEF";
  let color='#';
  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalID;
const startChangingColor=function()
{
  if(!intervalID)
  {
    intervalID=setInterval(chnageBgColor,1000);
  }
  
  function chnageBgColor()
  {
  let color=randomCOlor();
  // console.log(color);
  document.body.style.backgroundColor=color;
  }

};
const stopChangingColor= function()
{
    clearInterval(intervalID);
    intervalID=null;
};
document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);