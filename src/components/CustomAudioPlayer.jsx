import React, { useState } from 'react';
import '../App.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

const CustomAudioPlayer = ({ src, transmitPlayerRef }) => {
  return (
    <AudioPlayer
      src={src}
      className="audioplayer"
      // onPlay={e => console.log("onPlay")}
      onPause={(e) => {
        e.target.currentTime = e.target.currentTime - 1;
      }}
      ref={(el) => {
        transmitPlayerRef(el);
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
  );
};

export default CustomAudioPlayer;
