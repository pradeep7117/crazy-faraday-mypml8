import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);

  async function getadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setadvice(data.slip.advice);
    setcount((c) => c + 1);
  }
  useEffect(function () {
    getadvice();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={getadvice}> click button</button>
      <p>
        you read ths page<strong>{count}</strong>
      </p>
    </div>
  );
}
