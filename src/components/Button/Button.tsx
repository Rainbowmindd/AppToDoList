import styles from "./Button.module.css";
interface ButtonProps {
  onClick?: () => void;
}

export function Button({onClick}: ButtonProps) {
  return <button  onClick={onClick} className={styles.Button}>Add</button>;
}
