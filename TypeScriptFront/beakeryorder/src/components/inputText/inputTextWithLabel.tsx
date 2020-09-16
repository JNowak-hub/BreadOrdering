import React from "react";

const InputField = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
};
export default InputField;
