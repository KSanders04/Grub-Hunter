import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  variant: "blue" | "outlined";
  clickHandler?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  variant,
  clickHandler,
}) => {
  const renderContent = (children: React.ReactNode) => {
    if (disabled) {
      return <span>{children}</span>;
    }
    return <span onClick={clickHandler}>{children}</span>;
  };

  return (
    <div
      className={`${styles.button} ${variant === "blue" ? styles.blue : ""} ${variant === "outlined" ? styles.outlined : ""} ${disabled ? styles.disabled : ""}`}
    >
      {renderContent(children)}
    </div>
  );
};

export default Button;
