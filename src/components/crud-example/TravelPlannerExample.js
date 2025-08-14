import React from "react";
import TravelPlanner from "./TravelPanner";
import TravelPlanProvider from "./TravelPlanContext";
import "./TravelPlanner.css";

function TravelPlannerExample() {
  return (
    <TravelPlanProvider>
      <TravelPlanner />
    </TravelPlanProvider>
  );
}

export default TravelPlannerExample;
