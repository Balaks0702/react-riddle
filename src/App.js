import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [riddle, setRiddle] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState("");

  const fetchRiddle = async () => {
    try {
      const response = await fetch("https://riddles-api.vercel.app/random");
      const data = await response.json();
      renderRiddle(data);
      setShowAnswer(false);
    } catch (error) {
      console.error("Error fetching riddle:", error);
    }
  };

  const renderRiddle = (data) => {
    setRiddle(data.riddle || "No riddle available.");
    setAnswer(data.answer || "No answer available.");
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  return (
    <div>
      <h1>Riddle Time!</h1>

      <p id="riddle">{riddle}</p>

      {showAnswer && <p><strong>Answer:</strong> <em>{answer}</em> </p>}
      {riddle && 
        <button class="button-17" onClick={() => setShowAnswer(true)}>Show Answer</button>
      }

      <button class="button-17" id="button" onClick={fetchRiddle}>
        Get a new Riddle
      </button>
    </div>
  );
}

export default App;
