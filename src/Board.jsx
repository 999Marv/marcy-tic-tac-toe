import { useState } from 'react';
import Square from './Square';
import Players from './Players';

export default function Board() {
  const [board, setBoard] = useState(new Array(9).fill(null));

  return (
    <>
      <Players />
      <section>
        <Square val={board[0]} />
        <Square val={board[0]} />
        <Square val={board[0]} />
      </section>
      <section>
        <Square val={board[0]} />
        <Square val={board[0]} />
        <Square val={board[0]} />
      </section>
      <section>
        <Square val={board[0]} />
        <Square val={board[0]} />
        <Square val={board[0]} />
      </section>
    </>
  );
}
