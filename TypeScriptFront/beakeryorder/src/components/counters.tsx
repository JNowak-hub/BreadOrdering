import Counter from "./Counter";
import React, { Component } from "react";

const Counters = () => {
  const counters = [
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];
  return (
    <div>
      {counters.map(({ id, value }) => (
        <Counter key={id} value={value} />
      ))}
    </div>
  );
};

export default Counters;
