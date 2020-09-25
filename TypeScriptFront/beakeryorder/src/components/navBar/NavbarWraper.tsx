import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 55px;

  background: rgba(84, 11, 11, 0.49);
border: 1px solid #010000;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  > * {
    flex: 1;
  }
`;

export default NavbarWrapper;
