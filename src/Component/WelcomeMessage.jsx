import { useContext } from "react";
import style from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../../Store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={style.welcome}>Enjoy Your Day!</p>
  );
};

export default WelcomeMessage;