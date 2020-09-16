import { FC } from "react";
import React from "react";
import NavbarWrapper from "./NavbarWraper";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

interface NavbarProps {
  date: Date;
}

const Navbar: FC<NavbarProps> = ({ date }) => {
  return (
    <NavbarWrapper>
      <NavbarItem>Time: {date.toLocaleDateString()}</NavbarItem>
      <Link to="/about">
        <NavbarItem>O piekarni</NavbarItem>
      </Link>
      <NavbarItem>O czymś</NavbarItem>
      <Link to="/login">
        <NavbarItem>Login</NavbarItem>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
