import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function PlayButton() {
  return (
    <figure className={'playfigure'}>
      <img className={'playimage'} src="./play-circle.png" alt="play" />
      <div className="shortcut">Esc</div>
    </figure>
  );
}

export default PlayButton;
