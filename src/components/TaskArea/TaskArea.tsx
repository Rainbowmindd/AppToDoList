import { Task } from "../Task/Task";
import styles from "./TaskArea.module.css";
import { TaskTypes } from "../../types";

interface TaskAreaProps {
  tasks: TaskTypes[];
  setTasks: (updateTasks: (prevTasks: TaskTypes[]) => TaskTypes[]) => void;
}

export function TaskArea({ tasks, setTasks }: TaskAreaProps) {
  function handleCheck(id: number) {
    setTasks((prevTasks: TaskTypes[]) => {
      return prevTasks.map((task: TaskTypes) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }
  function handleDelete(id: number) {
    setTasks((prevTasks: TaskTypes[]) => {
      return prevTasks.filter((task: TaskTypes) => task.id !== id);
    });
  }

  return (
    <div className={styles.TaskArea}>
      <h2>Tasks</h2>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}
