import React, { useRef, useCallback, useEffect } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "../../assets/svg";
import Button from "../Button";
export interface ModalProps {
  children: React.ReactNode;
  props?: any;
  title: string;
  show?: boolean;
  loading?: boolean;
  handleShow: (a: boolean) => void;
  hasFooter?: boolean;
  hasHeader?: boolean;
  handleSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  handleShow,
  show,
  hasFooter,
  hasHeader = true,
  handleSubmit,
  loading,
}) => {
  const node = useRef<HTMLDivElement>(null);

  const handleHide = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        handleShow(!show);
        return;
      }
    },
    [handleShow, show]
  );
  const handleClick = useCallback(
    (event:any ) => {
      if (node.current && !node.current.contains( event.target)) {
        handleShow(!show);
        return;
      }
    },
    [handleShow, show]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleHide);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleHide);
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick, handleHide]);

  return (
    <div role="dialog" className={styles.Modal}>
      <div className={styles.ModalContent}  ref={node}>
        {hasHeader && (
          <div className={styles.header}>
            <h3>{title}</h3>
            <CloseIcon
              role="button"
              onKeyDown={() => handleShow(!show)}
              onClick={() => handleShow(!show)}
            />
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.bodyContent}>{children}</div>
        </div>
        {hasFooter && (
          <div className={styles.footer}>
            <Button
              type="button"
              variant="neutral"
              onKeyDown={() => handleShow(!show)}
              onClick={() => handleShow(!show)}
            >
              Close
            </Button>
            <Button
              type="button"
              data-dismiss="modal"
              variant="primary"
              onClick={handleSubmit}
              disabled={loading}
              name="submit"
            >
              {loading ? "loading..." : "Submit"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
