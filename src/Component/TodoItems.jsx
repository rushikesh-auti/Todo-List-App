import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
          onDeleteClick={onDeleteClick}>
        </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;