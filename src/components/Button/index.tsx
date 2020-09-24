import React from "react";
import styles from "./button.module.scss";
// enum ButtonType {
//   button = "button",
//   reset = "reset",
//   submit = "submit",
//   undefined = "undefined",
// }

interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined,
  onClick(): void;
  children: any;
  rest?: any;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  ...rest
}) => (
  <button type={type} onClick={onClick} className={styles.Button} {...rest}>
    {children}
  </button>
);
export default Button;
