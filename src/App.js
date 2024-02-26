import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <DateGen day={count} />
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

function DateGen(props) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + props.day);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${days[currentDate.getDay()]} ${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()} ${currentDate.getFullYear()}`;

  return props.day === 0 ? (
    <div>
      <span>The date today is </span>
      <span>{formattedDate} </span>
    </div>
  ) : (
    <div>
      <span>{props.day} </span>
      <span>
        {props.day === 1 || props.day === -1
          ? "day from today is "
          : "days from today is "}
      </span>
      <span>{formattedDate} </span>
    </div>
  );
}
