import styled from "styled-components";

const FormStyled = styled.form`
  font: 22px "Times New Roman", serif;
  width: 500px;
  height: 600px;
  padding: 10% 2px;
  background: rgba(61, 4, 4, 0.61);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InputFieldWrapper = styled.input`
  width: 75%;
  padding: 2px 25px;
  margin: 20px 0;
  box-sizing: border-box;
  border: 2px solid #eac043;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.53);
`;

const FormButtonWrapper = styled.div`
  font: 22px "Times New Roman", serif;
  font-size: 30px;
  margin: 20px;
  width: 40%;
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

export { FormStyled, FormButtonWrapper, InputFieldWrapper };
