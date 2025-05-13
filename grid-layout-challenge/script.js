function toggleNav()
{
  const outerGrid=document.querySelector('.outer-grid');
  outerGrid.classList.toggle("outer-grid-expanded-class");
  const navBar=document.querySelector("nav");
  navBar.classList.toggle("hide-nav");
 
}

