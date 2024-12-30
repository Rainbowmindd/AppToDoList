import { InputArea } from "./components/InputArea/InputArea";
import { ToDo } from "./components/ToDo/ToDo";
import { TaskArea } from "./components/TaskArea/TaskArea";
import "./style.css";
import { useState } from "react";
import {TaskTypes} from "./types";


function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [error, setError] = useState<string>("");

  function addTask() {
    if (taskTitle.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }
    setTasks((prevTasks) => {
      setError("");
      return [
        ...prevTasks,
        {
          id: prevTasks.length + 1,
          title: taskTitle,
          completed: false,
        },
      ];
    });
    setTaskTitle("");
  }
  return (
    <ToDo>
      <InputArea
        taskTitle={taskTitle}
        addTask={addTask}
        setTaskTitle={setTaskTitle}
        error={error}
      />
      <TaskArea tasks={tasks} setTasks={setTasks} />
    </ToDo>
  );
}

export default App;
