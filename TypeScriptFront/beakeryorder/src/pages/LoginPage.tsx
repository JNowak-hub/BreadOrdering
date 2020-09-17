import React, { FC } from "react";
import InputButtonWrapper from "../components/inputText/inputButtonWrapper";
import InputField from "../components/inputText/inputTextWithLabel";

const LoginPage = () => {
  return (
    <h2>
      <InputButtonWrapper>
        <InputField text="test Text" name="Test name" value="Test Value" />
      </InputButtonWrapper>
    </h2>
  );
};

export default LoginPage;
