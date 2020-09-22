import React from "react";
import { FormStyled, FormButtonWrapper } from "./inputButtonWrapper";

const InputField = () => {
  const sendUserNameAndPassword = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };
    const response = await fetch(
      "http://localhost:8080/api/login",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <FormStyled>
      <label>
        UserName:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <FormButtonWrapper onClick={sendUserNameAndPassword} />
    </FormStyled>
  );
};
export default InputField;
