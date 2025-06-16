import { products } from "./db/products.js"

console.log(products);
const productContainer=document.getElementById("products");
for (let product of products)
{
  const cardContainer=document.createElement("div");
  cardContainer.classList.add("card", "card-vertical","d-flex",
     "direction-column","relative","shadow");

  /** Image Container */

  const imageContainer=document.createElement("div");
  imageContainer.classList.add("card-image-container");
  const image=document.createElement("img");
  image.classList.add("card-image");
  image.setAttribute("src",product.img);
  image.setAttribute("alt",product.alt);
  imageContainer.appendChild(image);
  cardContainer.appendChild(imageContainer);

  /** Card-Details  Container */
  const cardDetailsContainer=document.createElement("div");
  cardDetailsContainer.classList.add("card-details");

    const BrandContainer=document.createElement("div");
    BrandContainer.classList.add("card-title");
    BrandContainer.innerText=product.brand;
    cardDetailsContainer.appendChild(BrandContainer);


    /** Card-Description  Container */
    const cardDescriptionContainer=document.createElement("div");
    cardDescriptionContainer.classList.add("card-description");

    /** Product Name */
    const name=document.createElement("p");
    name.classList.add("card-des");
    name.innerText=product.name;
    cardDescriptionContainer.appendChild(name);

    /** Product Price */
    const price=document.createElement("p");
    price.classList.add("card-price","d-flex","align-end","gap-sm");
    price.innerText=`Rs. ${product.newPrice}`;
    const oldPrice=document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText=`Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);
    
    const discount=document.createElement("span");
    discount.classList.add("discount");
    discount.innerText=`(${product.discount}% OFF)`
    price.appendChild(discount);

    cardDescriptionContainer.appendChild(price);

    /** Rating container */
    const ratings=document.createElement("p");
    ratings.classList.add("d-flex","align-center");
    const rating=document.createElement("span");
    rating.innerText=product.rating;
    const star=document.createElement("span");
    star.classList.add("material-icons-outlined","star");
    star.innerText="star";
    ratings.appendChild(rating);
    ratings.appendChild(star);
    cardDescriptionContainer.appendChild(ratings);
    cardDetailsContainer.appendChild(cardDescriptionContainer);

    /** CAT button container */

    const ctButton=document.createElement("div");
    ctButton.classList.add("cta-button");
    const button=document.createElement("button");
    button.classList.add("button" ,
      "btn-primary",
      "btn-icon", 
      "cart-btn", "d-flex",
      "align-center", "justify-center",
      "gap",
      "cursor", "btn-margin");
      const cartButton=document.createElement("span");
      cartButton.classList.add("material-icons-outlined");
      cartButton.innerText="shopping_cart";
      button.innerText="Add to Cart";
      button.appendChild(cartButton);
      ctButton.appendChild(button);

    cardDetailsContainer.appendChild(ctButton);
    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(cardDetailsContainer);
    
  productContainer.appendChild(cardContainer);
}
