import { useState } from 'react';
import Square from './Square';
import Players from './Players';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [board, setBoard] = useState(new Array(9).fill(null));

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleSquare(i) {
    if (board[i] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice();

    if (xIsNext) {
      newBoard[i] = 'X';
    } else {
      newBoard[i] = 'O';
    }

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(board);
  let status;
  let color;

  if (winner) {
    status = 'Winner: ' + winner;
    color = 'win';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  let full = true;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      full = false;
    }
  }

  if (full) {
    status = 'Draw';
    color = 'draw';
  }

  return (
    <>
      <Players />
      <div className={color}>{status}</div>
      <section>
        <Square val={board[0]} squareClick={() => handleSquare(0)} />
        <Square val={board[1]} squareClick={() => handleSquare(1)} />
        <Square val={board[2]} squareClick={() => handleSquare(2)} />
      </section>
      <section>
        <Square val={board[3]} squareClick={() => handleSquare(3)} />
        <Square val={board[4]} squareClick={() => handleSquare(4)} />
        <Square val={board[5]} squareClick={() => handleSquare(5)} />
      </section>
      <section>
        <Square val={board[6]} squareClick={() => handleSquare(6)} />
        <Square val={board[7]} squareClick={() => handleSquare(7)} />
        <Square val={board[8]} squareClick={() => handleSquare(8)} />
      </section>
    </>
  );
}
