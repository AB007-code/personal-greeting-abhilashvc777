
import React from "react";
import './../styles/App.css';

const App = () => {
  const [state,setState] = useState("")
  const handel = (e)=>{
    let input = e.target.value
    setState("Hello"+input)
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <label>Enter your name</label>
    <input type="text" onPress={handel}/>
    <h2>{state}</h2>
    </div>
  )
}

export default App
