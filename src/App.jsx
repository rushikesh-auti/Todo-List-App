import AppName from "./Component/AppName.jsx";
import AddTodo from "./Component/AddTodo.jsx";
import TodoItems from "./Component/TodoItems.jsx";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMessage.jsx";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [

      ...currValue,
      {
        todoName: itemName,
        todoDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemsName
    );

    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItems} />

      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      />
    </center>
  );
}

export default App;