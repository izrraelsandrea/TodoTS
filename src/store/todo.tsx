import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/types";

const initialTodoState: { todoList: Todo[] } = { todoList: [] };

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push({
        id: Math.random(),
        title: action.payload,
        active: true,
      });
    },
    closeTodo(state, action) {
      const toogleTodoIndex = state.todoList.findIndex((todo) => {
        return todo.id === action.payload;
      });
      state.todoList[toogleTodoIndex].active =
        !state.todoList[toogleTodoIndex].active;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
