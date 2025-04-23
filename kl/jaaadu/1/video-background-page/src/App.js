import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const videos = {
    video1: "https://www.w3schools.com/html/movie.mp4",  // URL of Video 1
    video2: "https://www.w3schools.com/html/movie2.mp4", // URL of Video 2
    video3: "https://www.w3schools.com/html/movie3.mp4"  // URL of Video 3
  };

  const images = [
    { id: 'img1', src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
    { id: 'img2', src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
    { id: 'img3', src: 'https://via.placeholder.com/300x200', alt: 'Image 3' }
  ];

  const [videoUrl, setVideoUrl] = useState(videos.video1);

  const changeVideo = (videoKey) => {
    setVideoUrl(videos[videoKey]);
  };

  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="container text-center">
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-md-4 mb-4">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid img-thumbnail clickable-image"
                onClick={() => changeVideo(image.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
