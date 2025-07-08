import {
    createSlice, nanoid
} from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //create new todo and add data 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            //insert new data to store todos array
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //apply filter on todos and remove the todo with matching id
            state.todos = state.todos.filter((eachtodo) => eachtodo.id !== action.payload)
        },
        //workinprogress
        updateTodo: (state, action) => {
            state.todos = state.todos.filter((eachtodo) => eachtodo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer