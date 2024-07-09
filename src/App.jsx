import React from "react";

// Step 1: import the useState from react
import { useState } from "react";
import State from "./components/State";
import Form from "./components/Form";
import Register from "./components/Register";

const App = () => {
  // Step 2: create state variables and a function
  const [nameState, setNameState] = useState("Bolu");
  const [jobTitleState, setJobTitleState] = useState("upcoming artiste");
  const [locationState, setLocationState] = useState("I came from the gutters");

  const meetApostle = () => {
    setNameState ("BoluCello")
    setJobTitleState ("Superstar Cellist")
    setLocationState ("I now live in London Mayfair")
  };
  return (
    <>
      <h1>
        Hello my name is {nameState}, I am an {jobTitleState} and I play the
        Cello and {locationState}.
      </h1>
      <br />
      <button onClick={meetApostle} className="border p-1 rounded ring">
        Meet Apostle
      </button>
      <br /><br />

      <State/>
      <Form/>
      <Register/>
    </>
  );
};

export default App;
