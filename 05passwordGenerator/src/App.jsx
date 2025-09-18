import { useCallback, useEffect, useRef, useState } from 'react'                             

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,SetNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,Setpassword] = useState("");

  // Password Generator Method
  // Using useCallback for optimization
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "012345689"
    if(characterAllowed) str += "~`!@#$%^&*()_+";

    for(let i=1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length + 1);

      pass += str.charAt(char);
    }

    Setpassword(pass);
  }, [length, numberAllowed,characterAllowed,Setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();  // here we are giving highlighted result after pressing copy button to inform user that this much password is selected for copying 
    passwordRef.current?.setSelectionRange(0,3) // selecting only the limited value to copy 
    window.navigator.clipboard.writeText(password)
  },[password])

  // Using useEffect() hook
  useEffect(() => {passwordGenerator()} , [length,numberAllowed,characterAllowed,passwordGenerator])

  // Using useRef hook - for copying the generated password 
  const passwordRef = useRef(null)

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 text-orange-500 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 text-white px-3 py-0.5 shrink-0 
           hover:bg-red-600 hover:scale-125 transition duration-200"
          >copy</button>
        </div>

        {/* Setting length */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {6}
            max = {100}
            value = {length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>

          {/* Numbers Checkbox */}
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed} 
            id = "numberInput"
            onChange={()=>{
                SetNumberAllowed((prev) => !prev)
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Character Checkbox */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {characterAllowed}
            id = "characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}/>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
