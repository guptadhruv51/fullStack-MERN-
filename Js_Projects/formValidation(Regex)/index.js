
let formData=document.querySelector(".form");
let submitBtn=document.querySelector('.button');
let firstName,lastName,email,password;
let field;
let emptyMsgs=document.querySelectorAll(".empty-field");
let nameRegex=/^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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
    if(firstName)
    {
      emptyMsgs[0].classList.add("d-none");
      if(!nameRegex.test(firstName)) 
      {
        //.test return true if the pattern matches, will return false if it doesn't 
        errorMsgs[0].classList.remove("d-none");
      }
      else{
        errorMsgs[0].classList.add("d-none");
      }
    }
    else{
      emptyMsgs[0].classList.remove("d-none");
    }

    if(lastName)
      {
        emptyMsgs[1].classList.add("d-none");
        if(!nameRegex.test(lastName)) 
        {
          //.test return true if the pattern matches, will return false if it doesn't 
          errorMsgs[1].classList.remove("d-none");
        }
        else{
          errorMsgs[1].classList.add("d-none");
        }
      }
      else{
        emptyMsgs[1].classList.remove("d-none");
      }
    if(email)
      {
        emptyMsgs[2].classList.add("d-none");
        if(!emailRegex.test(email)) 
        {
            //.test return true if the pattern matches, will return false if it doesn't 
            errorMsgs[2].classList.remove("d-none");    
        }
        else{
          errorMsgs[2].classList.add("d-none");
        }
      }
    else{
      emptyMsgs[2].classList.remove("d-none");
      }
        if(password)
          {
            emptyMsgs[3].classList.add("d-none");
            if(!passwordRegex.test(password)) 
            {
              //.test return true if the pattern matches, will return false if it doesn't 
              errorMsgs[3].classList.remove("d-none");
            }
            else{
              errorMsgs[3].classList.add("d-none");
            }
          }
          else{
            emptyMsgs[3].classList.remove("d-none");
          }  
})