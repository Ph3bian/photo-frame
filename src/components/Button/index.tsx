import React, { ReactNode } from "react";
import styles from "./button.module.scss";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  children?: ReactNode;
  props?: any;
  title?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  title,
  variant,
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    className={[styles["Button"], variant && styles[`${variant}`]].join(" ")}
    {...props}
  >
    {title ? title : children}
  </button>
);
export default Button;
