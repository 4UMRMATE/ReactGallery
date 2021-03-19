import axios from "axios";
import { useEffect, useState } from "react";

export default function Slider() {
  const [pictures, setPictures] = useState(["a"]);
  const [index, setIndex] = useState(0);

  const fetchPictures = async () => {
    try {
      await axios
        .get("https://ms-gallery-api.herokuapp.com/api/gallery/pictures")
        .then((res) => {
          setPictures(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const sliderChange = (direction) => {
    switch (direction) {
      case "left":
        index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1);
        break;
      case "right":
        index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <div className="Slider">
      <button className="slider-arrows" onClick={() => sliderChange("left")}>
        &lArr;
      </button>
      <div className="Picture">
        {pictures.map((picture, idx) => (
          <img
            className={`image ${index === idx ? "active" : ""}`}
            key={idx}
            src={picture.url}
            alt=""
          ></img>
        ))}
      </div>
      <button className="slider-arrows" onClick={() => sliderChange("right")}>
        &rArr;
      </button>
    </div>
  );
}
