import { useState } from "react";
export default function Slotbtn({ val1, val2, val3 }) {
  const randNum1 = Math.floor(Math.random() * val1.length);
  const randNum2 = Math.floor(Math.random() * val1.length);
  const randNum3 = Math.floor(Math.random() * val1.length);
  const found = val1[randNum1];
  const found2 = val2[randNum2];
  const found3 = val3[randNum3];
  const isWinner = found === found2 && found === found3;
  const [reroll, setReRoll] = useState(true);
  let [count, setCount] = useState(0);
  const btnReRoll = () => {
    setReRoll(!reroll);
    setCount(count + 1);
    if (isWinner) {
      setCount(count - count);
      console.log(count);
    }
  };

  return (
    <div>
      <span>Tries:{count}</span>
      <h1>
        {found}
        {found2}
        {found3}
      </h1>

      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You WIN!!" : "Unlucky, Try Again."}
      </h2>
      {isWinner && <h3>{count}</h3>}

      <button onClick={btnReRoll}>Re-Roll</button>
    </div>
  );
}
