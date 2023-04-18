import { createSlice } from "@reduxjs/toolkit";
type Todo = {
  id: number;
  title: string;
};
const initialTodoState: { todoList: Todo[] } = { todoList: [] };

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push({ id: Math.random(), title: action.payload });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
