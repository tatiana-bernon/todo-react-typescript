import React from "react";
import "./TodoListItem.css"

//Declares the type of TodoListItem using Interface (In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.)
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

//Generic type called FC allows to type our function components while taking into account Typescript Types
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className= {todo.complete? "complete" : "undefined"}>
        <input type="checkbox" 
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

