import React, { FC } from "react";
import InputField from "../components/inputText/inputTextWithLabel";
import {
  BackgroundImageWrapper,
  ContainerWrapper,
} from "../components/styles/backgroundImageWrapper";
const LoginPage = () => {
  return (
    <ContainerWrapper>
      <InputField />
    </ContainerWrapper>
  );
};

export default LoginPage;
