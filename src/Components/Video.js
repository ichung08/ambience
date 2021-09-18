import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "../Styles/video.css";
import "../Styles/index.css";

const Video = ({ moodHandler }) => {
	// dimensions
	const height = 480;
	const width = 640;

	// const [photo, setPhoto] = useState(false);
	const video = useRef();
	const canvas = useRef();

	// load api then start video once components are mounted
	useEffect(() => {
		const loadModels = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "/models";
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
				faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
				faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
				faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
			]).then(startVideo);
		};
		loadModels();
	}, []);

	const startVideo = () => {
		navigator.getUserMedia(
			{
				video: {},
			},
			(stream) => (video.current.srcObject = stream),
			(err) => console.error(err)
		);
	};

	// once video starts, run api periodically for face and expression recognition
	const handleVideoOnPlay = () => {
		const id = setInterval(async () => {
			canvas.current.innerHTML = faceapi.createCanvasFromMedia(video.current);
			const displaySize = {
				width: width,
				height: height,
			};
			faceapi.matchDimensions(canvas.current, displaySize);
			const detections = await faceapi
				.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks()
				.withFaceExpressions();
			const resizedDimensions = faceapi.resizeResults(detections, displaySize);
			canvas.current.getContext("2d").clearRect(0, 0, width, height);

			faceapi.draw.drawDetections(canvas.current, resizedDimensions);
			faceapi.draw.drawFaceLandmarks(canvas.current, resizedDimensions);
			faceapi.draw.drawFaceExpressions(canvas.current, resizedDimensions);
			console.log(detections);
			if (detections.length > 0) {
				clearInterval(id);
				moodHandler(detections);
			}
		}, 5000);
	};
	/*
  const findHighest = (expressions) => {
    var max = Number.MIN_SAFE_INTEGER;
    var expression;
    for (var key of Object.keys(expressions)) {
      if (expressions[key] > max) {
        max = expressions[key];
        expression = key;
      }
    }
    return expression;
  }

  // once video starts, run api periodically for face and expression recognition
  const handleVideoOnPlay = () => {
    const id = setInterval(async () => { 
      setInitializing(true);
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
      console.log(detections);
      if (detections.length > 0) {
        clearInterval(id);
        console.log(findHighest(detections[0].expressions));
        moodHandler(findHighest(detections[0].expressions));
      }
    }, 5000)
  } 
  /*
  const handleVideoOnPlay = async () => {
      const id = setInterval(() => {
        if (initializing) {
            setInitializing(false);
        }
        clearInterval(id);
      }, 1000)
  } 

  const takePhoto = async () => {
      
    const displaySize = {
        width: width,
        height: height
    }
    faceapi.matchDimensions(canvas.current, displaySize);
    canvas.current.innerHTML = faceapi.createCanvasFromMedia(video.current);
    canvas.current.getContext('2d').drawImage(video.current, 0, 0, width, height); 
    setPhoto(true);
  } 

  const checkPhoto = async () => {
      if (photo) {
    const detections = await faceapi.detectSingleFace(canvas.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
    console.log(detections);
      }
  }

  checkPhoto(); */

	return (
		<div className="video">
			<video
				ref={video}
				autoPlay
				muted
				height={height}
				width={width}
				onPlay={handleVideoOnPlay}
			/>
			<canvas
				ref={canvas}
				style={{ display: "none" }}
				className="position-absolute photo"
			/>
		</div>
	);
};

export default Video;
