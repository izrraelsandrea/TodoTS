import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { todoActions } from "../store/todo";
import { RootState } from "../store";
import { Todo } from "../../types/types";

import "./FormItem.css";

const FormItem = () => {
  const dispatch = useDispatch();
  const wholeState = useSelector((state) => state);
  console.log(wholeState);

  const todoPiece = useSelector((state: RootState) => state.todos.todoList);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem = inputRef.current?.value;

    if (newItem) {
      dispatch(todoActions.addTodo(newItem));
      inputRef.current!.value = "";
    }
  };
  const closeTodoHandler = (id: number) => {
    dispatch(todoActions.closeTodo(id));
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="todo">Add Todo </label>
        <input type="text" id="todo" name="todo" ref={inputRef} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todoPiece.map((item) => {
          return (
            <li
              className={item.active ? "list" : "listDone"}
              key={item.id}
              onClick={() => closeTodoHandler(item.id)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FormItem;
