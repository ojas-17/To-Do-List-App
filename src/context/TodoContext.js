import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    
    lastid: 0,

    addTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
