import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);

  const getMedia = async () => {
    setStream(await navigator.mediaDevices.getUserMedia({ video: true }));
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      <header>
        <h1>Hello, world</h1>
      </header>

      <main>
        <video
          id='localVideo'
          autoPlay
          muted
          playsInline
          ref={(video) => {
            if (video && stream) {
              video.srcObject = stream;
            }
          }}
        ></video>
        <video id='remoteVideo' autoPlay playsInline></video>
      </main>
    </>
  );
}

export default App;
