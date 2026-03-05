import { useState } from "react";
import "../Styles/Test.css";

export default function Test() {
  const [move, setMove] = useState(false);

  return (
    <div>
      <button onClick={() => setMove(!move)}>Animate</button>

      <div className={`box ${move ? "go" : ""}`} />
    </div>
  );
}
