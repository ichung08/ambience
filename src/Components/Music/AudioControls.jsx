import {IoPlayCircle, IoPlayForward, IoPlayBack, IoPauseCircle} from "react-icons/io5";
const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
    return (
        <div className="audio-controls">
            <button type="button" aria-label="Previous" onClick={onPrevClick}>
                <IoPlayBack className="prev"/>
            </button>
            {isPlaying ? 
             (<button type="button" aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
                <IoPauseCircle className="pause" />
            </button>) : 
             (<button type="button" aria-label="Play" onClick={() => onPlayPauseClick(true)}>
                <IoPlayCircle className="play" />
            </button>)}
            <button type="button" aria-label="Next" onClick={onNextClick}>
                <IoPlayForward className="next" />
            </button>
        </div>
    )
}

export default AudioControls
