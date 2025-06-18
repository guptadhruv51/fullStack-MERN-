
import './App.css'
import {Link,Routes,Route,NavLink} from 'react-router-dom';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';
function App() {
  const getStyles=({isActive})=>
  {
    return{
       color: isActive?'red':''
    }
  }

  return (
   <>
    <div className='App'>
      <NavLink to="/Cart" style={getStyles}> Cart</NavLink>||
      <NavLink to="/" style={getStyles}> Home</NavLink>


      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>

    </div>
   </>
  )
}

export default App
