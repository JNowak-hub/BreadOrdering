import React from "react";

const CustomDate = () => {
  const [date, setDate] = React.useState("");

  let getDate = () => {
    setDate(new Date().toDateString());
  };

  return (
    <div>
      {date}
      <button onClick={getDate}>Get the date</button>
    </div>
  );
};

export default CustomDate;
