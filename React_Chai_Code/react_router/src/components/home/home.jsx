import {useNavigate} from 'react-router-dom';
export const Home=()=>{
  const navigate=useNavigate();
const onGocartClick=()=>
{
    navigate('/cart');

}

  return(
    <>
    <h1>Home Page</h1>
    <button onClick={onGocartClick}>Go to Cart</button>
    </>
  )
}