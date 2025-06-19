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
    // const cartLength=document.querySelector(".item-count");
    // cartLength.innerText=cart.length;
    // console.log(cartLength);
    updateCartUI();
  }
)

createHorizontalProductcard(cart,cartContainer);
updateCartUI();
function updateCartUI() {
  // Update item count
  const cartLength = document.querySelector(".item-count");
  cartLength.innerText = cart.length;

  // Calculate prices
  const ogPrice = cart.reduce((acc, curr) => acc + curr.oldPrice, 0);
  const newPrice = cart.reduce((acc, curr) => acc + curr.newPrice, 0);
  const discount = ogPrice - newPrice;

  // Update price elements
  const productPrice = document.querySelector(".product-price");
  productPrice.innerText = ogPrice;

  const totalDiscount = document.querySelectorAll(".discount-amount");
  for (let element of totalDiscount) {
    element.innerText = discount;
  }

  const totalPrice = document.querySelector(".total-amount");
  totalPrice.innerText = newPrice + 100; // Add shipping or handling if needed
}