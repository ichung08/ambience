import {IoPlayCircleOutline, IoPlayForward, IoPlayBack, IoPauseCircleOutline} from "react-icons/io5";
const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
    return (
        <div className="audio-controls">
            <button type="button" className="prev" aria-label="Previous" onClick={onPrevClick}>
                <IoPlayBack />
            </button>
            {isPlaying ? 
             (<button type="button" className="pause" aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
                <IoPauseCircleOutline />
            </button>) : 
             (<button type="button" className="play" aria-label="Play" onClick={() => onPlayPauseClick(true)}>
                <IoPlayCircleOutline />
            </button>)}
            <button type="button" className="next" aria-label="Next" onClick={onNextClick}></button>
            

        </div>
    )
}

export default AudioControls
