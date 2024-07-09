import React from "react";
import { useState } from "react";

const Register = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("")
  const [phoneNumberState, setPhoneNumberState] = useState("")
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = { firstNameState, lastNameState, phoneNumberState, emailState, passwordState};
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        action=""
        className="border rounded bg-slate-100 w-[400px] p-3 m-3 shadow"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="firstName">FirstName:</label>
          <input
            value={firstNameState}
            onChange={(e) => setFirstNameState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Please enter your FirstName"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="lastName">LastName:</label>
          <input
            value={lastNameState}
            onChange={(e) => setLastNameState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Please enter your LastName"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="email">email address:</label>
          <input
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            className="w-[250px] mb-2"
            type="email"
            name="email"
            id="email"
            placeholder="Please  enter your email address"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            value={phoneNumberState}
            onChange={(e) => setPhoneNumberState(e.target.value)}
            className="w-[250px] mb-2"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Please  enter your Phone Number"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="password">Password:</label>
          <input
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            className="w-[250px] mb-2"
            type="password"
            name="password"
            id="password"
            placeholder="Please enter your password"
          />
        </div>

        <button className="border w-1/4 text-white hover:bg-red-800 shadow rounded-full px-1 py-1 mx-36 bg-red-600">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
