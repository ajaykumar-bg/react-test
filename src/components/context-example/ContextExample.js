import React from "react";
import { UserProvider } from "./UserContext";
import ComponentOne from "./ComponentOne";

function ContextExample() {
  return (
    <UserProvider>
      <ComponentOne />
    </UserProvider>
  );
}

export default ContextExample;
