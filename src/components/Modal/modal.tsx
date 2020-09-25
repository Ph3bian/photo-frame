import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "../../assets/svg";
export interface ModalProps {
  children: any;
  props?: any;
  title: string;
  show: boolean;
  outsideClick: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  outsideClick,
  show,
}) => {
  const [isOpen, setIsOpen] = useState(show);
  const node = useRef<HTMLDivElement>(null);

  const handleHide = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
    },
    [setIsOpen]
  );
  const handleClick = useCallback(
    (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setIsOpen(false);
        return;
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleHide, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("keydown", handleHide, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClick, handleHide]);

  return (
    <div className={styles.Modal} ref={node}>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        className={styles.ModalContent}
      >
        <div className={styles.header}>
          <h3>{title}</h3>
          <CloseIcon />
        </div>
        <h1>Hello</h1>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
