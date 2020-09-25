import React from "react";
import {
  FormStyled,
  FormButtonWrapper,
  InputFieldWrapper,
} from "../styles/inputButtonWrapper";
import LabelWrapper from "../styles/labelStyle";

const InputField = () => {
  const sendUserNameAndPassword = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    const data = await response.json();

    await window.localStorage.setItem("jwt", data.jwt);
  };

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <FormStyled>
      <LabelWrapper>
        UserName:
        <InputFieldWrapper
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </LabelWrapper>
      <LabelWrapper>
        Password:
        <InputFieldWrapper
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </LabelWrapper>
      <FormButtonWrapper onClick={sendUserNameAndPassword}>
        Login
      </FormButtonWrapper>
      <FormButtonWrapper>SingIn</FormButtonWrapper>
    </FormStyled>
  );
};
export default InputField;
