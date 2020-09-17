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
      <Link to="/about">
        <NavbarItem>O piekarni</NavbarItem>
      </Link>
      <NavbarItem>O czymś</NavbarItem>
      <Link to="/products">
        <NavbarItem>Produkty</NavbarItem>
      </Link>
      <Link to="/login">
        <NavbarItem>Login</NavbarItem>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
