// eslint-disable-next-line react/prop-types
export default function Square({ val, squareClick }) {
  return <button onClick={squareClick}>{val}</button>;
}
