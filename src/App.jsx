import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
