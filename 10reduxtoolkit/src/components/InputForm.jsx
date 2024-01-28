import  { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


function InputForm() {
    const [todo, settodo] = useState("");
    const dispatch = useDispatch()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return;
        dispatch(addTodo(todo))
        settodo("")
    }
    return (
        
            <form onSubmit={add} className="space-x-3 mt-12">
                <input
                 type='text'
                 placeholder='write a todo'
                 className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 value={todo}
                 onChange={(e)=>settodo(e.target.value)}
                ></input>
                <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Add
                </button>
            </form>
        
    )
}

export default InputForm
