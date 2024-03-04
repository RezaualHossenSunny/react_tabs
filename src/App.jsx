
import { useState } from 'react'
import './App.css'

function App() {
  const [togle, setTogle] = useState(0)

  return (
    <>
  <div className='max-w-container mx-auto py-8 gap-6 flex'>
  <p className='w-[100px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl'>HTML</p>
  <p className='w-[100px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl'>CSS</p>

  <p className='w-[150px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl'>JAVASCRIPT</p>


  </div>
    </>
  )
}

export default App
