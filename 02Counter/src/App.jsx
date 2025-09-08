import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // Using useState() hook 

  let [counter, setcounter] = useState(15);

  // let counter = 5;

  const incrementValue = () => {
    counter  = counter + 1;
    setcounter((counter) => {
      if(counter >= 20){
        alert("NOT ALLOWED TO GO ABOVE 20");
        return counter;
      }
      return counter + 1;
    });
  }

  
  const decrementValue = () => {
    counter = counter - 1;
    setcounter((counter)=>{
      if(counter <= 0){
        alert("NOT ALLOWED TO GO BELOW 0");
        return counter;
      }
      return counter - 1;
    });
  }

  

  return (
    <>  
      <h1>Code with Ayush</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={incrementValue}> Increase Value </button>
      <br />
      <br />
      <button
      onClick={decrementValue}> Decrease Value </button>
    </>
  )
}

export default App
