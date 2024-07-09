import React from "react";
import { useState } from "react";

const State = () => {
  const [titleState, setTitleState] = useState("Mr Bambo");
  const [officeState, setOfficeState] = useState("Cocoa farm");
  const [maritalState, setMaritalState] = useState("1 wife");
  const [childrenState, setChildrenState] = useState("2");

  const coronation = () => {
    setTitleState("Prince Bambo (I)");
    setOfficeState("City");
    setMaritalState("4 wives");
    setChildrenState("25");
  };
  return (
    <>
      <h1>
        I am {titleState}, I run a {officeState}, I have {maritalState}{" "}
        and {childrenState} children.
      </h1>
      <br />
      <button onClick={coronation} className="border p-1 rounded ring">
        Coronation
      </button>
      <br /><br />
    </>
  );
};

export default State;
