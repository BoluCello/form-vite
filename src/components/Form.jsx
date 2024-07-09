import React from "react";
import { useState } from "react";

const Form = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = { emailState, passwordState };
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

        <button className="border w-1/4 text-white hover:bg-gray-700 shadow rounded-full px-1 py-1 mx-36 bg-blue-500">
          Login
        </button>
      </form>
    </>
  );
};

export default Form;
