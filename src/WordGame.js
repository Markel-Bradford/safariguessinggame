import React, { useState, useEffect } from "react";
import axios from "axios";
import './WordGame.css';

function WordGame() {
  const [wordLength, setWordLength] = useState(0);
  const [incorrectWord, setIncorrectWord] = useState([]);
  const [turnsRemaining, setTurnsRemaining] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [guess, setGuess] = useState('');
  const [currentGuess, setCurrentGuess] = useState(null);
  const [guessResponse, setGuessResponse] = useState(null);
  const [hint, setHint] = useState(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = async () => {
    try {
      const response = await axios.get("https://wg-flask-server.onrender.com/app/start_game");
      const { word_length, num_turns } = response.data;
      setWordLength(word_length);
      setTurnsRemaining(num_turns);
      setGameOver(false);
      setIncorrectWord([]);
      setCurrentGuess('');
      setGuessResponse(null);
      setHint(null);
    } catch (error) {
      console.error("Error starting new game:", error.message);
    }
  };

  const makeGuess = async () => {
    try {
      const postData = { guess: guess };
      const response = await axios.post("https://wg-flask-server.onrender.com/app/make_guess", postData, {
        headers: { 'Content-Type': 'application/json' },
      });
      const {
        incorrect_word,
        turns_remaining,
        game_over,
        correct_guess,
        hint,
      } = response.data;

      setHint(hint);
      setIncorrectWord(incorrect_word);
      setTurnsRemaining(turns_remaining);
      setGameOver(game_over);
      setGuessResponse(correct_guess ? "Congratulations! You win!!" : "Incorrect guess. Try again.");

      if (game_over) {
        setGameOver("Game over. Better luck next time!");
      }
    } catch (error) {
      console.error("Error making guess:", error.message);
    }

    setCurrentGuess(guess);
    setGuess('');
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && guess.trim() !== '' && !gameOver) {
      makeGuess()
    }
  }

  return (
    <div>
      <div className="wordgame">
      <img className="bg" src="/images/safarianimals.jpeg" />
        <h1 className="title">Animal Guessing Game</h1>
        <h2 className="subtitle">Do you know your safari animals?</h2>
        <div className="app-container">
          <p>Word Length: {wordLength}</p>
          <p>Turns Remaining: {turnsRemaining}</p>
          <div>
            {hint && <p>Hint: {hint}</p>}
            <p>Incorrect words : [{incorrectWord.join(' ')}]</p>
            <p>Current Guess : {currentGuess}</p>
          </div>
          <input
            type="text"
            placeholder={`Enter a ${wordLength} letter word`}
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={gameOver}
          />
          {guessResponse && <div><p className="message">{guessResponse}</p></div>}
          <div className="button-container">
            <button onClick={makeGuess} disabled={gameOver}>Make Guess</button>
            <button onClick={startNewGame}>New Game</button>
          </div>
        </div>
        {gameOver && <h2>{gameOver}</h2>} 
      </div>
      <footer>
      <p className="footerText">&copy; Markel Bradford 2024</p>
      </footer>
    </div>
  );
}

export default WordGame;
