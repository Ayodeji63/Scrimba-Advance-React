import React, { useEffect, useRef, useState } from 'react'
import "./App.css"
import useWordGame from './useWordGame'
const App = () => {
  const {textBoxRef, 
    text, 
    handleChange, 
    startGame, 
    timeRemainig, 
    controlGame,
    wordCount} = useWordGame(15)
  return (
    <div>
      <h1>How fast can you type</h1>
      <textarea ref={textBoxRef} value={text} onChange = {handleChange} disabled = {!startGame} />
      <h4>Time Remaining: {timeRemainig}</h4>
      <button disabled = {startGame} onClick={controlGame} >Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App