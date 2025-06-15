import { useReducer } from 'react'
import './App.css'

function App() {
  
const initialState={
  count:0
}

const reducerFunc=(state,action)=>
{
  console.log(action);
    switch(action.type)
    {
      case 'INC':
        return {
          ...state,
          count:state.count+1
        };
        case 'DEC':
          return {
            ...state,
            count:state.count-1
          };
          default:
          {
            return state;
          }
    }
}
  const [state,dispatch]=useReducer(reducerFunc,initialState);
  return (
    <>
     
     <div className='App'>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:'INC'})}>INC</button>
      <button onClick={()=>dispatch({type:'DEC'})}>DEC</button>
     </div>
        
    </>
  )
}

export default App
