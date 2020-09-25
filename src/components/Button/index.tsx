import React from "react";
import styles from "./button.module.scss";
export interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  onClick(): void;
  children: any;
  rest?: any;
  title?: string
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  title,
  ...props
}) => (
  <button type={type} onClick={onClick} className={styles.Button} {...props}>
    {title ? title : children}
  </button>
);
export default Button;
