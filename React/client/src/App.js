import logo from './logo.svg';
import './App.css';

import { use, useState } from 'react';
// var count=0;
// var inputText='';
const AddButton=(props)=>
  {
    const {count,setCount}=props;
    
    const onIncrementClick=()=>
      {
         setCount(count+1);
      }
    
    return (
      <button onClick={onIncrementClick}>Increment {count}</button>
    )
  }

  const DecrementButton=()=>
    {
      return (
        <button>Decrement</button>
      )
    }
function App() {
  // const[value,setValue]=useState(0);  //Initial Value:0 

  
  // const onIncrementClick=()=>
  // {
  //   setValue(value+1);
  // }
  // const onDecrementClick=()=>
  // {
  //   setValue(value-1);
  // }
  // const[count,setCount]=useState(0);

  // return (
  //   // <>
  //   // <h1>JSX</h1>
  //   // <button onClick={onIncrementClick}> Increment</button>
  //   // <div>
  //   //   the value is {value}
  //   // </div>
  //   // <button onClick={onDecrementClick}>Decrement</button>
  //   // </>
    
  //   <>
  //   <AddButton count={count} setCount={setCount}/>
  //   <DecrementButton/>
  //   </>
  // )

  const[search,setSearch]=useState();
  const onSearchChange=(event)=>
  {
      setSearch(event.target.value);
  }

  return(
    <>
    <input onChange={onSearchChange} placeholder='Search'/>
    <p>{search}</p>
    </>
  )
}

export default App;
