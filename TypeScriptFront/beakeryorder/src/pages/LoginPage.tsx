import React, { FC } from "react";
import InputField from "../components/inputText/inputTextWithLabel";
import {
  BackgroundImageWrapper,
  ContainerWrapper,
} from "../components/styles/backgroundImageWrapper";
const LoginPage = () => {
  return (
    <BackgroundImageWrapper>
      <ContainerWrapper>
        <InputField />
      </ContainerWrapper>
    </BackgroundImageWrapper>
  );
};

export default LoginPage;
