import * as React from "react";
import { Component, useState, FC } from "react";
import { count } from "console";

interface CounterProps {
  value: number;
}

const Counter: FC<CounterProps> = ({ value }) => {
  const [count, setCount] = useState(value);
  const incrementState = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span className={count === 0 ? "warning" : "primary"}>
        {count === 0 ? "Zero" : count}
      </span>
      <button onClick={incrementState} className="btn btn-secondary">
        Increment
      </button>
    </div>
  );
};
export default Counter;
