import React, { useState } from "react";
import "./Tictactoe.css";

function Tictactoe(props) {
  const [squares, setSquares] = useState(Array(16).fill(null));

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);

  const status = calculateStatus(winner, squares);

  function calculateStatus(winner, squares) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Game is Tie!`
      : `Player turn: ${nextValue}`;
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [12, 9, 6, 3],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] === squares[d]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  }

  function onSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  function restart() {
    setSquares(Array(16).fill(null));
  }

  const user = props.input.split("@");
  return (
    <>
      <p>{user[0]}</p>
      <div className="box">
        <div>
          <div>
            {onSquare(0)}
            {onSquare(1)}
            {onSquare(2)}
            {onSquare(3)}
          </div>
          <div>
            {onSquare(4)}
            {onSquare(5)}
            {onSquare(6)}
            {onSquare(7)}
          </div>
          <div>
            {onSquare(8)}
            {onSquare(9)}
            {onSquare(10)}
            {onSquare(11)}
          </div>
          <div>
            {onSquare(12)}
            {onSquare(13)}
            {onSquare(14)}
            {onSquare(15)}
          </div>
        </div>
        <div>
          <button className="restart" onClick={restart}>
            Restart
          </button>
          <h2>{status}</h2>
        </div>
      </div>
    </>
  );
}

export default Tictactoe;
