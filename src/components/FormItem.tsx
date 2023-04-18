import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { todoActions } from "../store/todo";

import "./FormItem.css";

type Todo = {
  id: number;
  title: string;
};

const FormItem = () => {
  const dispatch = useDispatch();
  const todoPiece = useSelector(
    (state: { todoList: { todoList: Todo[] } }) => state.todoList
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    // solution 1
    console.log(todoPiece);
  }, [todoPiece]);

  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem = inputRef.current?.value;

    if (newItem) {
      dispatch(todoActions.addTodo(newItem));
      console.log(todoPiece);
      //   setTodoList((prev) => {
      //     return [...prev, { id: Math.random(), title: newItem }];
      //   });
      inputRef.current!.value = "";
    }
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="todo">Add Todo </label>
        <input type="text" id="todo" name="todo" ref={inputRef} />
        <button>Add Todo</button>
      </form>
      <ul>
        {/* {todoPiece.map((item) => {
          return (
            <li className="list" key={item.id}>
              {item.title}
            </li>
          );
        })} */}
      </ul>
    </>
  );
};
export default FormItem;
