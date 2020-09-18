import React from "react";

const InputField = () => {
  const sendUserNameAndPassword = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "admin",
        password: "adminadmin",
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
    <div>
      <div className="split left">
        <div className="centered">
          <form>
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
            <input type="submit" onClick={sendUserNameAndPassword} />
          </form>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <img src="bread-login.jpg" />
        </div>
      </div>
    </div>
  );
};
export default InputField;
