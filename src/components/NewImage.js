import axios from "axios";
import { useState } from "react";

const addNewImage = (url) => {
  axios
    .post(
      `https://ms-gallery-api.herokuapp.com/api/gallery/new-picture/?url=${url}`
    )
    .then((res) => console.log(res));
};

export default function NewImage() {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="NewImage">
      <h1>Add Your Own Image</h1>
      <div className="url-input">
        <form>
          <input
            id="img-url"
            type="url"
            onChange={handleChange}
            placeholder="https://"
          />
          <button id="submit" onClick={() => addNewImage(url)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
