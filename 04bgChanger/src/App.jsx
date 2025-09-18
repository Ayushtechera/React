import { useState } from "react"


function App() {
  const [colour, setcolour] = useState("aqua")

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    <div class="w-full h-screen duration-200"
    style={{backgroundColor: colour}} //implementing states here   
    >                                                                                                                              
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button 
          onClick={()=>setcolour("red")}
          className="outline=none px-5 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}} 
          >Red</button>

          <button 
          onClick={()=>setcolour("green")}
          className="outline=none px-5 py-1 rounded-full text-white"
          style={{backgroundColor:"green"}} 
          >Green</button>

          <button 
          onClick={()=>setcolour("grey")}
          className="outline=none px-5 py-1 rounded-full text-white"
          style={{backgroundColor:"grey"}} 
          >Grey</button>

          <button 
          onClick={()=>setcolour("black")}
          className="outline=none px-5 py-1 rounded-full text-white"
          style={{backgroundColor:"black"}} 
          >Black</button>

          <button 
          onClick={()=>setcolour("beige")}
          className="outline=none px-5 py-1 rounded-full text-black"
          style={{backgroundColor:"beige"}} 
          >Beige</button>

        </div>
      </div>
    </div> 
  )
}

export default App
