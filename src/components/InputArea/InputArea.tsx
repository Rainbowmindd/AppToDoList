import { Button } from "../Button/Button";
import styles from "./InputArea.module.css";


interface InputAreaProps {
    taskTitle: string;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  addTask: () => void;
}

export function InputArea({ taskTitle, setTaskTitle, error, addTask }: InputAreaProps) {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);

  }

  return (
    <>
      {error && <div>{error}</div>}
      <div className={styles.InputArea}>
        <input onChange={handleInput} type="text" value={taskTitle} placeholder="Add a task" />
        <Button onClick={addTask}></Button>
      </div>
    </>
  );
}
