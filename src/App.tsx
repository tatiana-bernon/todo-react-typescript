import React, { useState } from "react";
import { TodoListItem } from "./ToDoListItem";


const initialTodos: Array<Todo> = [
  {text: 'walk the dog', complete:true},
  {text: 'create app', complete:false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </>
  );
};

export default App;
