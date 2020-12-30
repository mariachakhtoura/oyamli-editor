import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function ForwardButton() {
  return (
    <figure className={'rewindfigure'}>
      <img
        className={'rewindimage'}
        src="./forward-2-seconds.png"
        alt="rewind"
      />
    </figure>
  );
}

export default ForwardButton;
