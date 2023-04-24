import ironman from "./assets/ironman.webp"
import Comment from './components/Comment'

function App() {
  return (
    <div className='ml-10'>
      <h1 className='font-medium text-5xl p-10'>Nested Comments</h1>
      <img className='w-96 rounded-md drop-shadow-md' src={ironman} alt='' />
      <Comment /> 
    </div>
  )
}

export default App;
