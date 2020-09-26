import React, { useState, useRef } from "react";
import "cropperjs/dist/cropper.css";
import { Cropper } from "react-cropper";
import styles from "./home.module.scss";
import DefaultImage from "../../assets/images/headshot.png";
import Button from "../../components/Button";
import { editActions } from "./functions";
import Preview from "./preview";

const Home: React.FC = () => {
  const [image, setImage] = useState<string>(DefaultImage);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cropData, setCropData] = useState<string>("");
  const imageRef = useRef<HTMLImageElement>(null);
  const [cropper, setCropper] = useState<Cropper>();

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

 
  const handlePublish = () =>{ 
    if(!showModal)handleData('publish') 
    setShowModal(!showModal) };

  const handleData = (type: string) => {
    if (typeof cropper !== "undefined") {
      switch (type) {
        case "crop":
          cropper.crop();
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "scale":
          cropper.scale(0, 1.01);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "rotate":
          cropper.rotate(90);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "clear":
          cropper.clear();
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "reset":
          cropper.reset();
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "moveDown":
          cropper.move(0, 10);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "moveUp":
          cropper.move(0, -10);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "moveLeft":
          cropper.move(-10, 0);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
        case "moveRight":
          cropper.move(10, 0);
          return setCropData(cropper.getCroppedCanvas().toDataURL());
          case "publish":
            return setCropData(cropper.getCroppedCanvas().toDataURL());
        default:
          return;
      }
    }
  };

  return (
    <div className={styles.Home}>
      <div className={styles.controls}>
        <h3>Edit Image</h3>
        <div className={styles.controlsButton}>
          {editActions &&
            editActions.map(({ key, title }) => (
              <Button type="button" key={key} onClick={() => handleData(key)}>
                {title}
              </Button>
            ))}
        </div>
        <div className={styles.action}>
          <div className={styles.imageUpload}>
            <label htmlFor="file">Upload</label>
            <input type="file" onChange={onChange} name="file" id="file" />
          </div>

          <Button type="button" onClick={handlePublish}>
            Publish
          </Button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h3>Upload Image </h3>
          <ul>
            <li>Select area you want to crop</li>
            <li>Click Publish to create frame</li>
          </ul>
        </div>
        <div className={styles.containerBody}>
          <div className="image">
            <Cropper
              style={{ height: "37.5rem", width: "100%", margin: "auto" }}
              initialAspectRatio={16 / 9}
              preview="#img-preview"
              guides={true}
              src={image}
              ref={imageRef}
              dragMode={"move"}
              checkOrientation={true}
              rotatable={true}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />

            <div className={styles.imagePublish}>
              {/* <img style={{ width: "100%" }} src={cropData} alt="cropped" /> */}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Preview
          data={cropData}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
export default Home;
