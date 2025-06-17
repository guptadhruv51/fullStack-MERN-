import { products } from "./db/products.js"
import { createProductCard } from "./createProductCart.js";
import { findProductIncart } from "./utils/findProductInCart.js";
let cart=JSON.parse(localStorage.getItem("cart"))||[];
console.log(products);
const productContainer=document.getElementById("products");


productContainer.addEventListener("click",
  (e)=>
  {
    const isProductInCart=findProductIncart(cart,e.target.dataset.id);
    if(!isProductInCart)
    {
    const producttoAddCart=products.filter(({_id})=>_id===e.target.dataset.id);
    cart=[...cart,...producttoAddCart];
    localStorage.setItem("cart",JSON.stringify(cart));
    const cartButton=e.target;
    cartButton.innerHTML="Go to Cart <span class='material-icons-outlined'>shopping_cart</span>"
    }
    else{
      location.href='cart.html';
    }
    
  }
)
createProductCard(products,productContainer,findProductIncart,"products");
