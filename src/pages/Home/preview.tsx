import React from "react";
import styles from "./home.module.scss";
import Modal from "../../components/Modal";
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
interface PreviewProps {
  data: string;
  showModal: true;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Preview: React.FC<PreviewProps> = ({ data, showModal, setShowModal }) => (
  <Modal
    title="Download Photo Frame"
    handleShow={setShowModal}
    show={showModal}
  >
    <div className={styles.Preview}>
      <img src={data} alt="preview" id="img-preview"className={styles.PreviewImage} />
    </div>
  </Modal>
);
export default Preview;
