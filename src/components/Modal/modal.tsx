import React, {  useRef, useCallback, useEffect } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "../../assets/svg";
export interface ModalProps {
  children: React.ReactNode;
  props?: any;
  title: string;
  show?: boolean;
 handleShow: (a:boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  handleShow,
  show,
}) => {
  const node = useRef<HTMLDivElement>(null);

  const handleHide = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        handleShow(!show);
        return;
      }
    },
    [handleShow,show]
  );
  const handleClick = useCallback(
    (event) => {
      if (node.current && !node.current.contains(event.target)) {
        handleShow(!show);
        return;
      }
    },
    [handleShow,show]
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
    <div role="presentation" className={styles.Modal} ref={node}>
      <div className={styles.ModalContent}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <CloseIcon
            role="button"
            onKeyDown={() => handleShow(!show)}
            onClick={() =>  handleShow(!show)}
          />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
