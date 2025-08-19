import React, { useState } from "react";
import "./MortgageCalculator.css";

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = (e) => {
    e.preventDefault();

    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    const monthly =
      (parseFloat(principal) *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <form className="calculator-form" onSubmit={calculateMortgage}>
        <div className="form-group">
          <label>Loan Amount (Rs):</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Loan Term (years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
            min="1"
          />
        </div>

        <button type="submit" className="calculate-btn">
          Calculate
        </button>

        {monthlyPayment > 0 && (
          <div className="result-section">
            <h3>Monthly Payment:</h3>
            <div className="monthly-payment">Rs {monthlyPayment}</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MortgageCalculator;
