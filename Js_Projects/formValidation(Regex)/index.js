
let formData=document.querySelector(".form");
let submitBtn=document.querySelector('.button');
let showPasswordBtn = document.querySelector(".btn");
let firstName,lastName,email,password;
let fnTarget,lnTarget,emailTarget,pwdTarget;
let field;
let fnflag= lflag=eflag=pwdflag=false;
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
        fnTarget=event.target;
        // console.log(event.target)
        break;
      case "lastName":
        lastName=event.target.value;
        lnTarget=event.target;
        break;
      case "email":
        email=event.target.value;
        emailTarget=event.target;
        break;
      case "password":
        password=event.target.value;
        pwdTarget=event.target;
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
        fnTarget.classList.add("error");
        //.test return true if the pattern matches, will return false if it doesn't 
        errorMsgs[0].classList.remove("d-none");
       
      }
      else{
        fnTarget.classList.remove("error");
        errorMsgs[0].classList.add("d-none");
        fnflag=true;
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
          lnTarget.classList.add("error");
          errorMsgs[1].classList.remove("d-none");
          

        }
        else{
          lnTarget.classList.remove("error");
          errorMsgs[1].classList.add("d-none");
          lflag=true;
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
          emailTarget.classList.remove("error");
            //.test return true if the pattern matches, will return false if it doesn't 
            errorMsgs[2].classList.remove("d-none");    
            
        }
        else{
          emailTarget.classList.remove("error")
          errorMsgs[2].classList.add("d-none");
          eflag=true;
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
              pwdTarget.classList.add("error");
              errorMsgs[3].classList.remove("d-none");
              
            }
            else{
              pwdTarget.classList.remove("error");
              errorMsgs[3].classList.add("d-none");
              pwdflag=true;
            }
          }
          else{
            emptyMsgs[3].classList.remove("d-none");
          }  

          if(fnflag&&lflag&&eflag&&pwdflag)
          {
            fnTarget.value=lnTarget.value=emailTarget.value=pwdTarget.value="";
            window.location.href="success.html";
          }
});

showPasswordBtn.addEventListener("click",(event)=>
{
  event.preventDefault();

    if(pwdTarget.getAttribute("type")==="text")
    {
      pwdTarget.setAttribute("type","password");
    }
    else
    {
      pwdTarget.setAttribute("type","text");
    }
})