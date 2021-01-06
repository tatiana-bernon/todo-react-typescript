import React from "react";
import { TodoListItem } from "./ToDoListItem";


const todos: Array<Todo> = [
  {text: 'walk the dog', complete:true},
  {text: 'create app', complete:false}
]

const App: React.FC = () => {
  return (
    <>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </>
  );
};

export default App;
