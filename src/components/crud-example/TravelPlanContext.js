import React, { createContext, useState } from "react";
import { DEFAULT_TRAVEL_PLANS } from "./travelPlans.mocks";

export const TravelPlanContext = createContext();

const TravelPlanProvider = ({ children }) => {
  const [travelPlans, setTravelPlans] = useState(DEFAULT_TRAVEL_PLANS);

  const addTravelPlan = (plan) => {
    const newPlan = {
      id: Date.now(),
      destination: plan.destination,
      startDate: plan.startDate,
      endDate: plan.endDate,
      description: plan.description,
      budget: plan.budget,
    };
    setTravelPlans([...travelPlans, newPlan]);
  };

  const editTravelPlan = (id, updatedPlan) => {
    setTravelPlans(
      travelPlans.map((plan) =>
        plan.id === id ? { ...updatedPlan, id } : plan
      )
    );
  };

  const deleteTravelPlan = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  const clearTravelPlans = () => {
    setTravelPlans([]);
  };

  return (
    <TravelPlanContext.Provider
      value={{
        travelPlans,
        addTravelPlan,
        editTravelPlan,
        deleteTravelPlan,
        clearTravelPlans,
      }}
    >
      {children}
    </TravelPlanContext.Provider>
  );
};

export default TravelPlanProvider;
