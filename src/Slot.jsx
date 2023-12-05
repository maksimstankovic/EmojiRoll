export default function Slot({ val1, val2, val3 }) {
  console.log("-------------");
  const counter = 0;
  const find = Math.floor(Math.random() * val1.length);
  const found = val1[find];
  const found2 = val2[find];
  const found3 = val3[find];
  const isWinner = found === found2 && found === found3;
  return (
    <div>
      <h1>
        {found}
        {found2}
        {found3}
      </h1>

      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You WIN!!" : "Unlucky, Try Again."}
      </h2>
      {isWinner && <h3>Congrats!!</h3>}
    </div>
  );
}
