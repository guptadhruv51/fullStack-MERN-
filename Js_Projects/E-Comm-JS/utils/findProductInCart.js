export const findProductIncart=(cart,productid)=>
{
    const isProductInCart=cart &&cart.length>0 &&cart.some(({_id})=>_id===productid);
    return isProductInCart;

}