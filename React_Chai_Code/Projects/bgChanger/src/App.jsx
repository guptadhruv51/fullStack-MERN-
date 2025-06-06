import { useState } from 'react'


function App() {
  
  const [color, setColor] = useState("olive");
  return (
   <>
    <div className="w-full h-screen " 
    style={{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0
     px-2">
      <div className="flex flex-wrap justify-center gap-3 
      shadow-lg bg-orange px-3 py-2 rounded-3xl" style={{backgroundColor:"White"}}>
      <button
      onClick={()=>setColor("red")} 
      className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
      <button 
      onClick={()=>setColor("yellow")} 
      className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"Yellow"}}>Yellow</button>
      <button 
      onClick={()=>setColor("green")} 
      className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"Green"}}>Green</button>
      <button 
      onClick={()=>setColor("blue")} 
      className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"Blue"}}>Blue</button>
      <button 
      onClick={()=>setColor("black")} 
      className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Black"}}>Black</button>
      <button 
      onClick={()=>setColor("magenta")} 
      className='outline-none px-4 py-1  rounded-full text-black' style={{backgroundColor:"Magenta"}}>Magenta</button>

      </div>
     </div>
     </div>
     </>
  )
}

export default App
