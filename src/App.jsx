import AppName from "./Component/AppName.jsx";
import AddTodo from "./Component/AddTodo.jsx";
import TodoItems from "./Component/TodoItems.jsx";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMessage.jsx";
import { TodoItemsContext } from "../Store/todo-items-store.jsx";

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        todoName: itemName,
        todoDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemsName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;