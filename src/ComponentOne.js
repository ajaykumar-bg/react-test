import { useMemo, useState, useCallback } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

function ComponentOne() {
  const [workflow, setWorkflow] = useState("GET_NAME");
  const [userName, setUserName] = useState("Chris");

  const onContinue = useCallback((e) => {
    setUserName(e);
    setWorkflow("WELCOME_MSG");
  }, []);

  const workFlowComp = useMemo(() => {
    switch (workflow) {
      case "GET_NAME":
        return <ComponentTwo pOnContinue={onContinue} />;
      case "WELCOME_MSG":
        return <ComponentThree userName={userName} />;
      default:
        break;
    }
  }, [workflow, onContinue, userName]);

  return <div className="componentOne">{workFlowComp}</div>;
}

export default ComponentOne;
