import { useState } from 'react'
import Navbar from "./component/navbar"
import Home from "./component/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
