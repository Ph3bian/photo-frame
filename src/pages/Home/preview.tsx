import React, {useState} from "react";
import styles from "./home.module.scss";
import Modal from "../../components/Modal";
import { postData } from "./functions";
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
interface PreviewProps {
  data: string;
  showModal: true;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Preview: React.FC<PreviewProps> = ({ data, showModal, setShowModal }) => {
const[loading, setLoading]=useState<boolean>(false)
  const handleSubmit = () => {
    setLoading(true)
    postData("https://photo-framer.herokuapp.com/upload", { image: data })
      .then((response) => {
        setLoading(false)
        const { data } = response;
        var a = document.createElement("a"); 
        a.href = data; 
        a.download = "framed-image.png"; 
        a.click(); 
       
      })
      .catch((error) => {
        setLoading(false)
        error ? console.error("Error:", error) : console.error("");
      });
  };
  return (
    <Modal
      title="Download Photo Frame"
      handleShow={setShowModal}
      show={showModal}
      handleSubmit={handleSubmit}
      hasFooter
      loading={loading}
    >
      <div className={styles.Preview}>
        {data ? (
          <img
            src={data}
            alt="preview"
            id="img-preview"
            className={styles.PreviewImage}
          />
        ) : (
          <p>To Publish image to a photo frame, editing image is required</p>
        )}
      </div>
    </Modal>
  );
};
export default Preview;
