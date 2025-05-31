const btns=document.querySelectorAll(".button");
// console.log(btns);
const body=document.querySelector("body");
btns.forEach(function (button)
{
  console.log(button);
  button.addEventListener("click",(e)=>
  {
    // console.log(e);
    // console.log(e.target);
    if(e.target.id==='grey')
      body.style.backgroundColor=e.target.id;
    if(e.target.id==='white')
      body.style.backgroundColor=e.target.id;
    if(e.target.id==='blue')
      body.style.backgroundColor=e.target.id;
    if(e.target.id==='yellow')
      body.style.backgroundColor=e.target.id;
    // body.style.backgroundColor=button.id;

  })
})