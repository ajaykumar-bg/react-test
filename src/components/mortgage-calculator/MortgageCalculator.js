import React, { useState } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
	const [principal, setPrincipal] = useState('');
	const [interestRate, setInterestRate] = useState('');
	const [loanTerm, setLoanTerm] = useState('');
	const [monthlyPayment, setMonthlyPayment] = useState(0);

	const calculateMortgage = (e) => {
		e.preventDefault();

		// Convert interest rate to monthly decimal
		const monthlyRate = parseFloat(interestRate) / 100 / 12;

		// Convert years to months
		const numberOfPayments = parseFloat(loanTerm) * 12;

		// Monthly mortgage calculation formula
		const monthly =
			(parseFloat(principal) *
				(monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
			(Math.pow(1 + monthlyRate, numberOfPayments) - 1);

		setMonthlyPayment(monthly.toFixed(2));
	};

	return (
		<div className='mortgage-calculator'>
			<h2>Mortgage Calculator</h2>
			<form onSubmit={calculateMortgage}>
				<div className='input-group'>
					<label>Loan Amount ($):</label>
					<input
						type='number'
						value={principal}
						onChange={(e) => setPrincipal(e.target.value)}
						required
					/>
				</div>
				<div className='input-group'>
					<label>Annual Interest Rate (%):</label>
					<input
						type='number'
						step='0.01'
						value={interestRate}
						onChange={(e) => setInterestRate(e.target.value)}
						required
					/>
				</div>
				<div className='input-group'>
					<label>Loan Term (years):</label>
					<input
						type='number'
						value={loanTerm}
						onChange={(e) => setLoanTerm(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Calculate</button>
			</form>
			{monthlyPayment > 0 && (
				<div className='result'>
					<h3>Monthly Payment: ${monthlyPayment}</h3>
				</div>
			)}
		</div>
	);
};

export default MortgageCalculator;
