import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import BookMark from './Component/BookMark/BookMark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
        <Blogs></Blogs>
        <BookMark></BookMark>
      </div>
    </>
  )
}

export default App
