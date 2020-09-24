import React, { useState, useRef } from "react";
import "cropperjs/dist/cropper.css";
import { Cropper } from "react-cropper";
import styles from "./home.module.scss";
import DefaultImage from "../../assets/images/headshot.png";
import Button from "../../components/Button"

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
      switch (type) {
        case "crop":
          setCropData(cropper.getCroppedCanvas().toDataURL());
          return cropper.crop();
        case "scale":
          return cropper.scale(0, 1.01);
        case "rotate":
          return cropper.rotate(90);
        case "clear":
          return cropper.clear();
        case "reset":
          return cropper.reset();
        case "moveDown":
          return cropper.move(0, 10);
        case "moveUp":
          return cropper.move(0, -10);
        case "moveLeft":
          return cropper.move(-10, 0);
        case "publish":
          return
        case "moveRight":
          return cropper.move(10, 0);
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
          <Button type="button" onClick={() => handleData("crop")}>
            Crop
          </Button>
          <Button type="button" onClick={() => handleData("rotate")}>
            Rotate
          </Button>
          <Button type="button" onClick={() => handleData("clear")}>
            Clear
          </Button>
          <Button type="button" onClick={() => handleData("reset")}>
            Reset
          </Button>
          <Button type="button" onClick={() => handleData("publish")}>
            Publish
          </Button>
          <Button type="button" onClick={() => handleData("moveUp")}>
            move up
          </Button>
          <Button type="button" onClick={() => handleData("moveDown")}>
            move down
          </Button>
          <Button type="button" onClick={() => handleData("moveLeft")}>
            move left
          </Button>
          <Button type="button" onClick={() => handleData("moveRight")}>
            move right
          </Button>{" "}
          <Button type="button" onClick={() => handleData("scale")}>
            scale
          </Button>
          
        </div>
        <div className={styles.imageUpload}>
          <input type="file" onChange={onChange} name="file" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerBody}>
          <h1>Upload Image</h1>

          <div>
            <h1>Preview</h1>
          </div>
          <div className="image">
            <Cropper
              style={{ height: 500, width: "100%" }}
              initialAspectRatio={16 / 9}
              preview="#img-preview"
              guides={true}
              src={image}
              ref={imageRef}
              dragMode={"move"}
              checkOrientation={true}
              rotatable={true}
              modal={true}
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
    </div>
  );
};
export default Home;
