import { useState } from 'react';

export default function Players() {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');

  function formHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { player1, player2 } = Object.fromEntries(formData);

    if (!player1 || !player2) return;

    setPlayer1(player1);
    setPlayer2(player2);

    e.target.reset();
  }

  return (
    <>
      <form action="submit" onSubmit={formHandler}>
        <label>
          Player 1 Name:
          <input type="text" name="player1"></input>
        </label>
        <label>
          Player 2 Name:
          <input type="text" name="player2"></input>
        </label>
        <button className="btn">Submit</button>
      </form>
      <section className="players">
        <h3>{player1}</h3>
        <h3>{player2}</h3>
      </section>
    </>
  );
}
