import React, { useState } from "react";
import { UserContext } from "./UserContext";
import ComponentOne from "./ComponentOne";

function ContextExample() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ComponentOne />
    </UserContext.Provider>
  );
}

export default ContextExample;
