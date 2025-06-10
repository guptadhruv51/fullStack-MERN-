
let formData=document.querySelector(".form");
let submitBtn=document.querySelector('.button');
let firstName,lastName,email,password;
let field;
let emptyMsgs=document.querySelectorAll(".empty-field");
for(let msgs of emptyMsgs)
{
  msgs.classList.add("d-none");
}
let errorMsgs=document.querySelectorAll(".error-message");
// console.log(errorMsgs);
for(let element of errorMsgs)
{
    element.classList.add("d-none");
}
formData.addEventListener("keyup",(event)=>
{
  event.preventDefault();
  // console.log(event.target.value);

    field=event.target.dataset.key;
    switch (field)
    {
      case "firstName":
        firstName=event.target.value;
        break;
      case "lastName":
        lastName=event.target.value;
        break;
      case "email":
        email=event.target.value;
        break;
      case "password":
        password=event.target.value;
        break;    
      default:
        firstName=lastName=email=password="";
        break;
    }
})

submitBtn.addEventListener("click",(event)=>
{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
})