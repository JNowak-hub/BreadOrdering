import React from "react";

type InputFieldProps = {
  text: string;
  name: string;
  value: string;
};

const InputField = (props: InputFieldProps) => {
  return (
    <form>
      <label>
        Name:
        <input type={props.text} name={props.name} />
      </label>
      <input type="submit" value={props.value} />
    </form>
  );
};
export default InputField;
