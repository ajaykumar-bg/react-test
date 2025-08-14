import React from "react";
import TravelPlanItem from "./TravelPlanItem";

const TravelPlanList = ({ travelPlans = [], onEdit, onDelete }) => {
  return (
    <div className="travel-plan-list">
      <h2>Travel Plans</h2>
      {travelPlans.length === 0 ? (
        <p>No travel plans available</p>
      ) : (
        <ul className="plan-list">
          {travelPlans.map((plan) => (
            <TravelPlanItem
              key={plan.id}
              plan={plan}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TravelPlanList;
