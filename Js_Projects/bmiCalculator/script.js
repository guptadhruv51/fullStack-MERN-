const form=document.querySelector("form");
console.log(form);
form.addEventListener('submit',(e)=>
{
  e.preventDefault();
  const height=parseInt(document.querySelector("#Height").value);
  const weight=parseInt(document.querySelector("#Weight").value);
  const result=document.querySelector("#results");
  if(height===' '||height<0 || isNaN(height))
  {
    result.innerHTML="Please give a valid Height";
  }
  else if(weight===' '||weight<0 || isNaN(weight))
  {
    result.innerHTML="Please give a valid Weight";
  }
  else{
    const BMI=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${BMI}</span>`
  }
  // console.log(height);
  // console.log(weight);

})
