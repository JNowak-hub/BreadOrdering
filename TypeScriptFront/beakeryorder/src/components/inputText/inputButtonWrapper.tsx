import styled from "styled-components";

const FormStyled = styled.form`
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

  font: 22px "Times New Roman", serif;
  margin: 3em;
  width: 50%;
  padding: 10% 2px;
  border: 5px solid #eac043;
`;

const FormButtonWrapper = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export { FormStyled, FormButtonWrapper };
