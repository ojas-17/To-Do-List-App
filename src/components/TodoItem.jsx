import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

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
                    
                    <span
                    className='cursor-pointer text-xl hover:bg-slate-400 flex justify-center items-center rounded-full'
                    style={{
                        lineHeight: '30px'
                    }}
                    onClick={() => deleteTodo(todo.id)}
                    >
                        {/* {"\u00d7"} */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default TodoItem