import React, { useState, useRef } from "react";
import "cropperjs/dist/cropper.css";
import { Cropper } from "react-cropper";
import styles from "./home.module.scss";
import DefaultImage from "../../assets/images/headshot.png";

const Home: React.FC = () => {
  const [image, setImage] = useState(DefaultImage);
  const [cropData, setCropData] = useState("#");
  const imageRef = useRef<HTMLImageElement>(null);
  const [cropper, setCropper] = useState<Cropper>();

  const onChange = (e: any) => {
    console.log("hello");
    console.log("hello", e);
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

  const handleData = (type: string) => {
    if (typeof cropper !== "undefined") {
      if (type === "crop") {
        setCropData(cropper.getCroppedCanvas().toDataURL());
      }
      if (type === "rotate") {
        cropper.rotate(90);
      }
      if (type === "clear") {
        cropper.clear();
      }
      if (type === "reset") {
        cropper.reset();
      }
      if (type === "publish") {
        cropper
          .getCroppedCanvas({ maxWidth: 4096, maxHeight: 4096 })
      }
      if (type === "moveUp") {
        cropper.move(0, 10);
      }
      if (type === "moveDown") {
        cropper.move(0, -10);
      }
      if (type === "moveLeft") {
        cropper.move(-10, 0);
      }
      if (type === "moveRight") {
        cropper.move(10, 0);
      }
    }
  };

  return (
    <div className={styles.Home}>
      <div className={styles.controls}>
        <button type="button" onClick={() => handleData("crop")}>
          Crop Image
        </button>
        <button type="button" onClick={() => handleData("rotate")}>
          Rotate Image
        </button>
        <button type="button" onClick={() => handleData("clear")}>
          Clear
        </button>
        <button type="button" onClick={() => handleData("reset")}>
          Reset
        </button>
        <button type="button" onClick={() => handleData("publish")}>
          Publish
        </button>
        <button type="button" onClick={() => handleData("moveUp")}>
          move up
        </button>
        <button type="button" onClick={() => handleData("moveDown")}>
          move down
        </button>
        <button type="button" onClick={() => handleData("moveLeft")}>
          move left
        </button>
        <button type="button" onClick={() => handleData("moveDown")}>
          move right
        </button>{" "}
        <button type="button" onClick={() => handleData("scale")}>
          scale
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.containerBody}>
          <h1>Upload Image</h1>

          <div>
            <h1>Preview</h1>
          </div>
          <div className="image">
            <Cropper
              style={{ height: 400, width: "100%" }}
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
            <div className={styles.imageUpload}>
              <input type="file" onChange={onChange} name="file" />
            </div>
            <div className={styles.imagePublish}>
              <img style={{ width: "100%" }} src={cropData} alt="cropped" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
