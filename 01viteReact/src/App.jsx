import Chai from "./test.jsx" 

function App() {
  const usernmae = "Code with ayush"
  return (
    <div>
      <Chai />
      {/* injecting variable username */}
      {/* {username} it is evaluated expression  */}
      <h1>Chai with code {username} </h1>
    </div>
  )
}

export default App

