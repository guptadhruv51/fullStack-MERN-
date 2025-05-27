import { useCallback,useState,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]=useState(false);
  const [charAllowed,setCharacter]=useState(false);
  const [password,setPassword]=useState("");
  
  //Ref Hook
const passWordRef=useRef(null);

 
  
  const passwordGen=useCallback(
    ()=>
    {
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed)
          str+="123456789"
        if(charAllowed)
          str+="!@#$%^&*()+_-{}[]"
        for(let i=1;i<=length;i++)
        {
          let char=Math.floor(Math.random()*str.length+1);
          pass+=str.charAt(char);
        }
        setPassword(pass);
    }

  ,[length,numberAllowed,charAllowed,setPassword]);

 const copyPassword=useCallback(()=>
{
      passWordRef.current?.select();
      passWordRef.current?.setSelectionRange(0,password.length);
      window.navigator.clipboard.writeText(password);
},[password]);
useEffect(()=>{
  passwordGen()
},[length,numberAllowed,charAllowed,passwordGen])

  return (
    <>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg
      px-4 py-3 my-8 text-orange-500
      bg-gray-800'> 
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded lg overflow-hidden mb-4 bg-white'>
        <input type="text"
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passWordRef}/>
        <button className='outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0'
        onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>
          {setLength(e.target.value)}
          }
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed} 
          id="numberInput"
          onChange={()=>{setNumber((prev)=>!prev)}}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed} 
          id="charInput"
          onChange={()=>{setCharacter((prev)=>!prev)}}/>
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
