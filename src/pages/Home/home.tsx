import React, { useState, useRef } from "react";
import 'cropperjs/dist/cropper.css';
import { Cropper } from "react-cropper";
import styles from "./home.module.scss";
import DefaultImage from "../../assets/images/headshot.png";

const Home: React.FC = () => {
  const [image, setImage] = useState(DefaultImage);
  const [cropData, setCropData] = useState("#");
  const imageRef = useRef<HTMLImageElement>(null);
  const [cropper, setCropper] = useState<Cropper>();

  const onChange = (e: any) => {
    console.log("hello")
    console.log("hello", e)
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

  const handleCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className={styles.Home}>
      <div className={styles.controls}></div>
      <div className={styles.container}>
        <div className={styles.containerBody}>
          <h1>Upload Image</h1>

          <div>
            <h1>Preview</h1>
            <div
              id="img-preview"
              style={{ width: "100%", height: 150 }}
            />
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
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />
            <div className={styles.imageUpload}>
              <input type="file" onChange={onChange} name="file" />
            </div>
            <div className={styles.imagePublish}>
              <button type="button" onClick={handleCropData}>
                Crop Image
              </button>
              <img style={{width: '100%'}} src={cropData} alt="cropped" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
