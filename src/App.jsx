import React, { useState} from 'react'
import { TodoProvider } from './context/TodoContext';
import TodoItem from './components/TodoItem';

// import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [msg, setMsg] = useState('')
  const [lastid, setLastid] = useState(0)

  const addTodo = (todo) => {
    if(todo === '')
      alert('Please Enter a To-do Item')
    else {
      const todoObj = {
        id: lastid + 1,
        todo: todo,
        completed: false
      }
  
      setTodos((prev) => [todoObj, ...prev])
      setLastid(lastid + 1)
      setMsg('')
    }
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todoEl) => todoEl.id !== id)
    })
  }

  const toggleComplete = (id) => {
    {console.log(id)}
    setTodos((prev) => {
      return prev.map((todoEl) => todoEl.id === id ? {id: id, todo:todoEl.todo, completed: !todoEl.completed} : todoEl)
    })
  }

  return (
    <>
      <TodoProvider value={{todos, lastid ,addTodo, deleteTodo, toggleComplete}}>
        <div className='flex justify-center w-full h-screen bg-gradient-to-br from-blue-800 to-purple-800 p-4'>
          <div className='flex flex-col text-lg mt-24 bg-white my-10 w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 h-min p-8 rounded-xl gap-6'>
            <h1 className='text-3xl text-'>To-Do List</h1>
            <div className='relative'>
              <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className='w-full bg-purple-300 rounded-full px-4 py-2' type="text" />
              <button 
              onClick={() => addTodo(msg)} 
              className='absolute right-0 text-white bg-blue-600 rounded-full px-8 py-2 hover:bg-blue-900 transition duration-200 ease-out'>Add</button>
            </div>
            <div className='p-2'>

              <TodoItem
              todos={todos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              />

            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
