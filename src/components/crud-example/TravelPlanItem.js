import React from "react";

function TravelPlanItem(props) {
  const { plan, onEdit, onDelete } = props;
  return (
    <li key={plan.id} className="plan-item">
      <div className="plan-details">
        <h3>{plan.destination}</h3>
        <p>
          Dates: {plan.startDate} - {plan.endDate}
        </p>
        <p>Budget: ${plan.budget}</p>
      </div>
      <div className="plan-actions">
        <button onClick={() => onEdit(plan.id)}>Edit</button>
        <button onClick={() => onDelete(plan.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TravelPlanItem;
