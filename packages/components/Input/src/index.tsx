import React from "react";

function Input({ inputValue = "Im a input module" }) {
  return <input type="text" name="name" value={inputValue} />;
}

export default Input;
