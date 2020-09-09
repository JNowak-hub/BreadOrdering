import React from "react";
import NavbarWrapper from "./NavbarWraper";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <NavbarWrapper>
    <Link to="/">
    <NavbarItem>O piekarni</NavbarItem>
    </Link>
    <NavbarItem>O czymś</NavbarItem>
  </NavbarWrapper>;
};

export default Navbar;