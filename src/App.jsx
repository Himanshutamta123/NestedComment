import { useState } from 'react'
import ironman from "./assets/ironman.webp"
import Comment from './components/Comment'
import RecursiveComponent from './components/RecursiveComponent'

// import './App.css'
const data = {
  name: 'Level 1',
  items: [{
    name: 'Level 2',
    items: [{
      name: 'Level 3'
    }]
  }]
}
function App() {

  return (
    <div className='ml-10'>
      <h1 className='font-medium text-5xl p-10'>Nested Comments</h1>
      <img className='w-96 rounded-md drop-shadow-md' src={ironman} alt='' />
      <Comment />
      {/* <RecursiveComponent {...data} /> */}
    </div>
  )
}

export default App;
