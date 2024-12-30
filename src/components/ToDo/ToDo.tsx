
import styles from "./ToDo.module.css";
interface ToDoProps {
  children?: React.ReactNode;
}

export function ToDo({ children }: ToDoProps) {
  return (
    <div className={styles.ToDo}>
      <h1>To do list</h1>
      <div className={styles.ToDoList}>{children}</div>
      
    </div>
  );
}
