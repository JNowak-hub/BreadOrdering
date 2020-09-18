import styled from "styled-components";

const InputButtonWrapper = styled.button`
  color: brown;
  input[type="text"] {
    width: 100%;
    padding: 2px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #eac043;
    border-radius: 4px;
    background-color: #80808040;
  }
  input[type="password"] {
    width: 100%;
    padding: 2px 25px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #eac043;
    border-radius: 4px;
    background-color: #80808040;
  }
  input[type="submit"] {
    width: 50%;
    color: #a52a2a;
    padding: 2px 20px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 2px solid #eac043;
    border-radius: 4px;
    background-color: #80808040;
  }
  .split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
  }

  .left {
    left: -20px;
  }

  .right {
    right: 5%;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .centered img {
    width: 100%;
    height: 100%;
  }
  font: 22px "Times New Roman", serif;
  margin: 3em;
  width: 50%;
  padding: 10% 2px;
  border: 5px solid #eac043;
`;

export default InputButtonWrapper;
