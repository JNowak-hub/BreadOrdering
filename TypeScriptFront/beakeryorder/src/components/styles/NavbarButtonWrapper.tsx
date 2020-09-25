import styled from "styled-components";

const NavbarButtonWrapper = styled.div`
  font: 18px "Times New Roman", serif;
  margin: 20px;
  width: 100%;
  color: #febe8f;
  background: rgba(52, 2, 2, 0.87);
  border: 1px solid #f11010;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default NavbarButtonWrapper;
