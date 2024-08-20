import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import BookMark from './Component/BookMark/BookMark'

function App() {
  const [count, setCount] = useState(0)

  const [bookmark, setbookmark] = useState([])
  const hendelBookMark = (cart) => {
    const newCart = [...bookmark, cart]
    setbookmark(newCart)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs hendelBookMark={hendelBookMark}></Blogs>
        <BookMark appToBook={bookmark}></BookMark>
      </div>
    </>
  )
}

export default App
