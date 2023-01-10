// Code Keypad Component Here
import React from "react";

const Password = () => {
  console.log("Entering password...");
};

const Keypad = () => {
  return (
    <div>
      <input type="password" onChange={Password}></input>
    </div>
  );
};

export default Keypad;
