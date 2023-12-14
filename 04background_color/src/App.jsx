import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (

    <>
    <div className='root' style={{backgroundColor: color}}>
      <div className='ButtonContainer'>
      
        <button className='redbutton' onClick={()=>{
          setcolor('red')
        }}>
          red
        </button>
        <button className='bluebutton'onClick={()=>{
          setcolor('blue')
        }} >
           blue
        </button>
        <button className='whitebutton'  onClick={()=>{
          setcolor('white')
        }}>
          white
        </button>
        <button className='olivebutton'  onClick={()=>{
          setcolor('olive')
        }}>
          olive
        </button>
        <button className='greenbutton' onClick={()=>{
          setcolor('green')
        }}>
          green
        </button>
        <button className='yellowbutton' onClick={()=>{
          setcolor('yellow')
        }}>
          yellow
        </button>

      </div>
    </div>
     
    </>
  )
}

export default App
