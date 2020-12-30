import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function RewindButton() {
  return (
    <figure className={'rewindfigure'}>
      <img
        className={'rewindimage'}
        src="./rewind-2-seconds.png"
        alt="rewind"
      />
    </figure>
  );
}

export default RewindButton;
