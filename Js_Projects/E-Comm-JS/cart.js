// import { createProductCard } from "./createProductCart.js";
import { findProductIncart } from "./utils/findProductInCart.js";
import { createHorizontalProductcard } from "./createHorizontalProduct.js";
let cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cartContainer.addEventListener("click",
  (e)=>
  {
    cart=cart.filter(({_id})=>_id!==e.target.dataset.id);
    cartContainer.innerHTML='';
    // createProductCard(cart,cartContainer,findProductIncart,'cart');
    createHorizontalProductcard(cart,cartContainer);
    localStorage.setItem("cart",JSON.stringify(cart));
  }
)
createHorizontalProductcard(cart,cartContainer);
// createProductCard(cart,cartContainer,findProductIncart,'cart');