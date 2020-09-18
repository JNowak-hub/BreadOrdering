import { FC } from "react";
import React, { useEffect } from "react";
import NavbarWrapper from "./NavbarWraper";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [time, setTime] = React.useState("");

  const updateTime = () => {
    setTime(msToTime(new Date()));
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, [updateTime]);

  function msToTime(duration: Date) {
    let seconds = duration.getSeconds(),
      minutes = duration.getMinutes(),
      hours = duration.getHours();

    const hoursString = hours < 10 ? "0" + hours.toString() : hours.toString();
    const minutesString =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secondsString =
      seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    return hoursString + ":" + minutesString + ":" + secondsString;
  }

  return (
    <NavbarWrapper>
      <NavbarItem>Time: {time}</NavbarItem>
      <NavbarItem>
        <form method="get" action="/about">
          <button type="submit">O piekarni</button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form method="get" action="/products">
          <button type="submit">Produkty</button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form method="get" action="/">
          <button type="submit">Home</button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form method="get" action="/login">
          <button type="submit">Login</button>
        </form>
      </NavbarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
