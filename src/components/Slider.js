import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignPictures, assignIndex } from "../actions";

export default function Slider() {
  // const [pictures, setPictures] = useState(["a"]);
  // const [index, setIndex] = useState(0);
  const index = useSelector((state) => state.activeIndex);
  const pictures = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  const fetchPictures = async () => {
    try {
      await axios
        .get("https://ms-gallery-api.herokuapp.com/api/gallery/pictures")
        .then((res) => {
          // setPictures(res.data);
          dispatch(assignPictures(res.data));
        });
    } catch (error) {
      console.error(error);
    }
  };

  const swipe = (direction) => {
    switch (direction) {
      case "left":
        index === 0
          ? dispatch(assignIndex(pictures.length - 1))
          : dispatch(assignIndex(index - 1));
        break;
      case "right":
        index === pictures.length - 1
          ? dispatch(assignIndex(0))
          : dispatch(assignIndex(index + 1));
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
      <button className="slider-arrows" onClick={() => swipe("left")}>
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
      <button className="slider-arrows" onClick={() => swipe("right")}>
        &rArr;
      </button>
    </div>
  );
}
