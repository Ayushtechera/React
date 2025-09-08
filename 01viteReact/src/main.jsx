import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

function App() {
  return (
    <div>
      <h1>Custom App | ayush</h1>
    </div>
  )
}

// const reactElement = { 
//     type : 'a',
//     props:{
//         href : 'https://google.com',
//         target : '_blanck'
//     },
//     children : 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target = '_blanck'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blanck'},
  'Click me to visit google'
)

createRoot(document.getElementById('root')).render(

    reactElement
)
