import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 50px;
  background: #270000ab;
  color: whitesmoke;
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  display: flex;
  > * {
    flex: 1;
  }
`;

export default NavbarWrapper;
