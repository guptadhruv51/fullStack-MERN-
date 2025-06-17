import { createProductCard } from "./createProductCart.js";
import { findProductIncart } from "./utils/findProductInCart.js";
let cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cartContainer.addEventListener("click",
  (e)=>
  {
    cart=cart.filter(({_id})=>_id!==e.target.dataset.id);
    cartContainer.innerHTML='';
    createProductCard(cart,cartContainer,findProductIncart,'cart');
    localStorage.setItem("cart",JSON.stringify(cart));
  }
)
createProductCard(cart,cartContainer,findProductIncart,'cart');