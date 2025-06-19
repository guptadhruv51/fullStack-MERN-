export const createHorizontalProductcard=(products,parentContainer)=>{
for(let product of products)
{
    const cardContainer=document.createElement("div");
    cardContainer.classList.add("card-horizontal","d-flex","shadow");
    const image=document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    cardContainer.appendChild(image);

    const cardDetails=document.createElement("div");
    cardDetails.classList.add("card-details","d-flex","direction-column");
    const cardTitle=document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.innerText=product.brand;
    cardDetails.appendChild(cardTitle);

    const cardDescription=document.createElement("div");
    const cardDes=document.createElement("p");
    cardDes.classList.add("card-des");
    cardDes.innerText=product.name;
    cardDescription.appendChild(cardDes);
    const cardPrice=document.createElement("p");
    cardPrice.classList.add("card-price");
    cardPrice.innerText=`Rs.${product.newPrice}`;
    const discPrice=document.createElement("span");
    discPrice.classList.add("price-strike-through","padding-all-8");
    discPrice.innerText=`Rs.${product.oldPrice}`;
    cardPrice.appendChild(discPrice);
    const discount=document.createElement("span");
    discount.classList.add("discount","padding-all-8");
    discount.innerText=`(${product.discount}% OFF)`
    cardPrice.appendChild(discount);
    cardDescription.appendChild(cardPrice);
    cardDetails.appendChild(cardDescription);

    const quantityContainer=document.createElement("div");
    quantityContainer.classList.add("quantity-container","d-flex","gap");
    const quantity=document.createElement("p");
    quantity.classList.add("q-title");
    quantity.innerText="Quantity";
    quantityContainer.appendChild(quantity);
    const countContainer=document.createElement("div");
    countContainer.classList.add("count-container","d-flex","align-center","gap");
    const minusBtn=document.createElement("button");
    minusBtn.classList.add("count");
    minusBtn.innerText="-";
    countContainer.appendChild(minusBtn);
    const countValue=document.createElement("span");
    countValue.classList.add("count-value");
    countValue.innerText="1";
    countContainer.appendChild(countValue);
    const plusBtn=document.createElement("button");
    plusBtn.classList.add("count");
    plusBtn.innerText="+";
    countContainer.appendChild(plusBtn);
    quantityContainer.appendChild(countContainer);

    cardDetails.appendChild(quantityContainer);




      const ctButton=document.createElement("div");
      ctButton.classList.add("cta-button","d-flex","gap");
      const removeButton=document.createElement("button");
      removeButton.classList.add("button" ,
        "hori-btn",
        "btn-primary",
        "btn-icon", 
        "d-flex",
        "align-center", "justify-center",
        "gap",
        "cursor", "btn-margin");
        removeButton.setAttribute("data-id",product._id);
        removeButton.innerText="Remove";  

     
      const saveButton=document.createElement("button");
      saveButton.classList.add("button" ,
        "hori-btn",
        "btn-primary",
        "btn-icon", 
        "d-flex",
        "align-center", "justify-center",
        "gap",
        "cursor", "btn-margin");
        
        saveButton.innerText="Save to Wishlist";  

        ctButton.appendChild(removeButton);
        ctButton.appendChild(saveButton);
        cardDetails.appendChild(ctButton);
        cardContainer.append(cardDetails);
        parentContainer.appendChild(cardContainer);
}

}