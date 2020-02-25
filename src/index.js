import React, { useState, useEffect } from "react";
import "./App.css";

const App = ({ count: initialCount }) => {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => {
      response.json().then(data => setPhoto(data.slice(0, initialCount)));
    });
  }, []);

  if (!photos.length) {
    return "Photos still fetching";
  }

  const getPhotos = () => {
    return photos.map(photo => {
      return (
        <a href={`/products/${photo.id}`} key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} id={photo.id} />
        </a>
      );
    });
  };

  return (
    <div className="page-view">
      <h1>Products page</h1>
      <div className="photo-container">{getPhotos()}</div>
    </div>
  );
};

export default App;
