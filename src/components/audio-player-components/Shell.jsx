import React, { useState } from 'react';
import './App.css';
// import PlayButton from './PlayButton';
// import RewindButton from './RewindButton';
// import ForwardButton from './ForwardButton';
// import loadOTinput from './scripts/loadOTinput.js';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function Shell() {
  let audioPlayer;
  const [file, setFile] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();

  const handleChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setYoutubeUrl('');
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
    }
  };

  const handleEscPress = (event) => {
    if (file) {
      if (event.code === 'Escape') {
        if (audioPlayer.audio.current.paused) {
          audioPlayer.audio.current.play();
        } else {
          audioPlayer.audio.current.pause();
          audioPlayer.audio.current.currentTime =
            audioPlayer.audio.current.currentTime - 1;
        }
      } else if (event.code === 'F1') {
        audioPlayer.audio.current.currentTime =
          audioPlayer.audio.current.currentTime - 2;
      } else if (event.code === 'F2') {
        audioPlayer.audio.current.currentTime =
          audioPlayer.audio.current.currentTime + 2;
      }
    }
  };

  const handleUrl = (event) => {
    if (event.code === 'Enter') {
      const validationRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=|\?v=)([^#\\&\\?]*).*/;
      const url = event.target.value;
      if (url.match(validationRegEx)) {
        setYoutubeUrl(url);
      } else {
        toast.error('Invalid youtube URL');
      }
    }
  };

  return (
    <>
      <div tabIndex="0" className="App" onKeyDown={handleEscPress}>
        <div className="audio_container">
          <input
            className="input"
            id="audio_file"
            type="file"
            accept=".mp3, .m4a, .flac, .mp4, .wav, .wma, .aac"
            onChange={handleChange}
          />
          <div>
            <span className="urllabel">or enter Youtube video URL</span>
            <input
              className="input"
              id="audio_url"
              type="text"
              onKeyDown={handleUrl}
            />
          </div>
          {!youtubeUrl ? (
            <>
              <AudioPlayer
                src={file && URL.createObjectURL(file)}
                className="audioplayer"
                // onPlay={e => console.log("onPlay")}
                onPause={(e) => {
                  e.target.currentTime = e.target.currentTime - 1;
                }}
                ref={(el) => {
                  audioPlayer = el;
                }}
                autoPlayAfterSrcChange={false}
                customProgressBarSection={[
                  RHAP_UI.MAIN_CONTROLS,
                  RHAP_UI.CURRENT_TIME,
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.DURATION,
                ]}
                customControlsSection={[]}
                customAdditionalControls={[]}
                progressJumpSteps={{ backward: 2000, forward: 2000 }}
                // customIcons={{
                //   play: <PlayButton />,
                //   rewind: <RewindButton />,
                //   forward: <ForwardButton />,
                // }}
              />
              {file && (
                <div className="shortcuts">
                  <div className="rewindshortcut">F1</div>
                  <div className="playshortcut">Esc</div>
                  <div className="forwardshortcut">F2</div>
                </div>
              )}
            </>
          ) : (
            <div className="player-wrapper">
              {/* <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  width='100%'
                  height='100%'
                /> */}
              <iframe
                className="react-player"
                id="player"
                title="url-player"
                type="text/html"
                width="640"
                height="390"
                src={youtubeUrl}
                frameBorder="0"
              ></iframe>
            </div>
          )}
        </div>
        <textarea id="yamli_textbox_id"></textarea>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        toastClassName="toastClass"
        bodyClassName="bodyToastClass"
      />
    </>
  );
}

export default Shell;
