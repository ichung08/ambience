import React, {useState, useEffect, useRef} from 'react';
import * as faceapi from "face-api.js";
import '../Styles/video.css';

const Video = () => {

  // video dimensions
  const height = 480;
  const width= 640;

  // hooks
  const [initializing, setInitializing] = useState(false);
  const video = useRef();
  const canvas = useRef();

  // load api then start video once components are mounted
  useEffect (() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      setInitializing(true);
       console.log(Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      ]).then(startVideo));
    }
    loadModels();
  }, [])

  const startVideo = () => {
    navigator.getUserMedia({
      video: {}
    }, stream => video.current.srcObject = stream,
      err => console.error(err)
    )
  }

  // once video starts, run api periodically for face and expression recognition
  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      canvas.current.innerHTML = faceapi.createCanvasFromMedia(video.current);
      const displaySize = {
        width: width,
        height: height
      }
      faceapi.matchDimensions(canvas.current, displaySize);
      const detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      const resizedDimensions = faceapi.resizeResults(detections, displaySize);
      canvas.current.getContext('2d').clearRect(0, 0, width, height);
      faceapi.draw.drawDetections(canvas.current, resizedDimensions);
      faceapi.draw.drawFaceLandmarks(canvas.current, resizedDimensions);
      faceapi.draw.drawFaceExpressions(canvas.current, resizedDimensions);
      console.log(detections.expressions);
    }, 100)
  }

  return (
    <div>
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <div className="display-flex justify-content-center">
      <video ref={video} autoPlay muted height={height} width={width} onPlay={handleVideoOnPlay}/>
      <canvas ref={canvas} className="position-absolute" />
      </div>
    </div>
  );
}

export default Video;
