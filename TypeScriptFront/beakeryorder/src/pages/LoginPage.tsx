import React, { FC } from "react";
import InputField from "../components/inputText/inputTextWithLabel";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <h2>
      <InputField />
    </h2>
  );
};

export default LoginPage;
