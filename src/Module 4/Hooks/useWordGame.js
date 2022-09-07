import { useState, useEffect, useRef } from "react";

function useWordGame(startinTime = 10) {
    const [text, setText] = useState("")
    const [timeRemainig, setTimeRemainig] = useState(startinTime)
    const [startGame, setStartGame] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
  
    const handleChange = (e) => {
      const {value} = e.target
      setText(value)
    }
  
    const calWord = (text) => {
      const word = text.trim().split(" ")
      const filteredCount = word.filter(word => word !== "").length
      return filteredCount;
      console.log(filteredCount);
    }
  
    const controlGame = () => {
      setStartGame(true)
      setTimeRemainig(startinTime)
      setText("")
      setWordCount(0)
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus();
  
    }
  
    useEffect(() => {
     if (startGame && timeRemainig > 0) {
      setTimeout(() => {
        setTimeRemainig(prevState => prevState - 1)
      }, 1000);
     } else if (timeRemainig == 0) {
        setStartGame(false)
        setWordCount(calWord(text))
     }
    },[startGame, timeRemainig])
    
    return {textBoxRef, text, handleChange, startGame, timeRemainig, controlGame, wordCount}
}

export default useWordGame