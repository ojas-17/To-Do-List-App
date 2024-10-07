import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import xMark from '../assets/x-mark.png'

function TodoItem({todos, deleteTodo, toggleComplete}) {

  return (
    <div>
        {todos.map((todo) => {
            return(
                <div
                key={todo.id}
                onClick={() => toggleComplete(todo.id)}
                className='flex items-center gap-2 cursor-pointer'
                >
                    <FontAwesomeIcon
                    icon={todo.completed ? faCircleCheck : faCircle}
                    className=''
                    // onClick={() => toggleComplete(todo.id)}
                    />
                    
                    <input
                    type="text"
                    value={todo.todo}
                    className={`outline-none w-full cursor-pointer ${todo.completed ? 'line-through' : ''}`}
                    readOnly
                    // onClick={() => toggleComplete(todo.id)}
                    />
                    
                    <img
                    className='h-5 rounded-full p-1 hover:bg-slate-400'
                    src={xMark}
                    onClick={() => deleteTodo(todo.id)}
                    />

                </div>
            )
        })}
    </div>
  )
}

export default TodoItem