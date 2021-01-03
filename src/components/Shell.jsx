import React, { useState, useRef } from 'react';
import '../App.css';
import CustomAudioPlayer from './CustomAudioPlayer';
import CustomTextarea from './CustomTextarea';
import ContactsBox from './ContactsBox';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { toast } from 'react-toastify';

function Shell() {
  let audioPlayer;
  let uploadInputElement;
  const [file, setFile] = useState();
  const [audioSrc, setAudioSrc] = useState();
  const [showAudioPlayer, setShowAudioPlayer] = useState(true);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [timeStamp, setTimeStamp] = useState();
  const contacts = useRef();

  const handleChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setYoutubeUrl('');
      setShowAudioPlayer(true);
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
      setAudioSrc(URL.createObjectURL(uploadedFile));
    }
  };

  const handleKeyPress = (event) => {
    if (file) {
      if (event.code === 'Escape') {
        event.preventDefault();
        if (audioPlayer.audio.current.paused) {
          audioPlayer.audio.current.play();
        } else {
          event.preventDefault();
          audioPlayer.audio.current.pause();
          audioPlayer.audio.current.currentTime =
            audioPlayer.audio.current.currentTime - 1;
        }
      } else if (event.code === 'F1') {
        event.preventDefault();
        audioPlayer.audio.current.currentTime =
          audioPlayer.audio.current.currentTime - 2;
      } else if (event.code === 'F2') {
        event.preventDefault();
        audioPlayer.audio.current.currentTime =
          audioPlayer.audio.current.currentTime + 2;
      } else if (event.code === 'F4') {
        event.preventDefault();
        setTimeStamp(audioPlayer.audio.current.currentTime);
      }
    }
  };

  const handleUrl = (event) => {
    if (
      (event.code === 'Enter' || event.code === 'NumpadEnter') &&
      youtubeUrl !== ''
    ) {
      const validationRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=|\?v=)([^#\\&\\?]*).*/;
      const url = event.target.value;
      if (url.match(validationRegEx)) {
        setShowAudioPlayer(false);
        setYoutubeUrl(url.replace('watch?v=', 'embed/'));
        uploadInputElement.value = '';
        uploadInputElement.file = '';
      } else {
        toast.error('Invalid youtube URL');
      }
    }
  };

  const handleUrlChange = (event) => {
    setYoutubeUrl(event.target.value);
  };

  const onContactsChange = (items) => {
    contacts.current = items;
  };

  const onNewMention = () => {
    return contacts.current || [];
  };

  return (
    <>
      <div tabIndex="0" className="App" onKeyDown={handleKeyPress}>
        <div className="audio_container">
          <input
            className="input"
            id="audio_file"
            type="file"
            accept=".mp3, .m4a, .flac, .mp4, .wav, .wma, .aac"
            onChange={handleChange}
            ref={(el) => {
              uploadInputElement = el;
            }}
          />
          <div>
            <span className="urllabel">or enter Youtube video URL</span>
            <input
              className="input"
              id="audio_url"
              type="text"
              value={youtubeUrl}
              onKeyDown={handleUrl}
              onChange={handleUrlChange}
            />
          </div>
          {showAudioPlayer ? (
            <>
              <CustomAudioPlayer
                src={audioSrc}
                transmitPlayerRef={(el) => {
                  audioPlayer = el;
                }}
              />
              {file && (
                <div className="shortcuts">
                  <div className="rewindshortcut">F1</div>
                  <div className="playshortcut">Esc</div>
                  <div className="forwardshortcut">F2</div>
                  <div className="timestampshortcut">F4</div>
                </div>
              )}
            </>
          ) : (
            <div className="player-wrapper">
              <iframe
                className="react-player"
                id="player"
                title="url-player"
                type="text/html"
                src={youtubeUrl}
                frameBorder="0"
              ></iframe>
            </div>
          )}
        </div>
        <div className="editorWrapper">
          <CustomTextarea timeStamp={timeStamp} onNewMention={onNewMention} />
          <ContactsBox onContactsChange={onContactsChange} />
        </div>
      </div>
    </>
  );
}

export default Shell;
