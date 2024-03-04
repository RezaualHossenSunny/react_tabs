
import { useState } from 'react'
import './App.css'

function App() {
  const [togle, setTogle] = useState(0);

 function update(id){
  setTogle(id)
 }

  return (
    <>
  <div  className='max-w-container mx-auto py-8 gap-6 flex'>
 <div onClick={()=> update(1)}>
 <p className='w-[100px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl cursor-pointer active:bg-violet-700'>HTML</p>
 </div>
  <div onClick={()=> update(2)}>
  <p className='w-[100px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl cursor-pointer active:bg-violet-700'>CSS</p>
  </div>

 <div onClick={()=> update(3)}>
 <p className='w-[150px] px-5 py-4 bg-slate-700 text-white text-center font-bold text-xl rounded-xl cursor-pointer active:bg-violet-700'>Javascript</p>
 </div>
  </div>

  <div className='max-w-container mx-auto mt-8'>
  <div className={togle ===1 ?"show" :"setShow"}>
  <p className='mt-1 w-[900px] text-amber-800 font-bold bg-slate-300 py-6 px-10'>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
  </div>

  <div className={togle ===2 ?"show" :"setShow"}>
  <p className='mt-1  w-[900px]  font-bold bg-slate-300 py-6 px-10'>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript</p>
  </div>
  <div className= {togle ===3 ?"show" :"setShow"}>
  <p className='mt-1 w-[900px]  font-bold bg-slate-300 py-6 px-10 text-purple-600'>JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.8% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries</p>
  </div>
  </div>
    </>
  )
}

export default App
