import { useState } from 'react'

function App() {
  //let counter=5;
  let [counter,setcounter]=useState(15);
  const addValue=()=>{
    if(counter+1<=20){
     counter=counter+1;
     console.log("value ",counter);
     setcounter(counter);
    }
  }
  const removevalue=()=>{
    if(counter-1>=0){
     counter=counter-1;
     console.log("value",counter);
     setcounter(counter);
    }
  }

  return (
    <>
    
    <h1> Radha raman</h1>
    <h2>count= {counter}</h2>
    <button onClick= {addValue}>Add value</button>
    <br/>
    <button onClick= {removevalue}>remove value</button>      
    </>
  )
}

export default App
