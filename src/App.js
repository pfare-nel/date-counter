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

  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinusCount() {
    setCount((c) => c - step);
  }
  function handlePlusCount() {
    setCount((c) => c + step);
  }

  return (
    <div className="container">
      <div>
        <button onClick={handleMinusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlusCount}>+</button>
      </div>

      <p>
        <DateGen day={count} />
      </p>
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
