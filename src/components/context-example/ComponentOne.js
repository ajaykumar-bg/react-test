import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function ComponentOne() {
  const { useState } = React;
  const [workflow, setWorkflow] = useState("GET_NAME");

  const onContinue = () => {
    setWorkflow("WELCOME_MSG");
  };

  switch (workflow) {
    case "GET_NAME":
      return <ComponentTwo onContinue={onContinue} />;
    case "WELCOME_MSG":
      return <ComponentThree />;
    default:
      break;
  }
}

function ComponentTwo(props) {
  const { onContinue } = props;
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Enter your name</h1>
      <div className="form">
        <input
          type="text"
          name="fname"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
}

function ComponentThree() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  );
}

export default ComponentOne;
