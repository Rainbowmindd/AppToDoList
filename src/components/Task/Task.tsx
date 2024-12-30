import style from "./Task.module.css";

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  handleCheck:{
    ( id: number): void;
  }
  handleDelete:{
    ( id: number): void;
  }
}

export function Task({ task, handleCheck, handleDelete }: TaskProps) {
    const checked=task.completed? "line-through": "none";
  return (
    <div className={style.Task} style={{textDecoration: checked}}>
      <button onClick={()=>handleCheck(task.id)}>
        <img
          width="24"
          height="24"
          src={task.completed? "https://img.icons8.com/ios-filled/50/FFFFFF/checked-checkbox.png": "https://img.icons8.com/ios/50/FFFFFF/checked-checkbox--v1.png"}
          alt="checked-checkbox--v1"
        />
      </button>
      {task.title}
      <button onClick={()=>handleDelete(task.id)}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-outlined/24/FFFFFF/waste.png"
          alt="waste"
        />
      </button>
    </div>
  );
}

//<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked-checkbox.png" alt="checked-checkbox"/>