import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TravelPlanForm from './TravelPlanForm';

describe('TravelPlanForm', () => {
	const mockOnSubmit = jest.fn();
	const mockOnCancel = jest.fn();
	const defaultProps = {
		onSubmit: mockOnSubmit,
		onCancel: mockOnCancel,
	};

	const mockTravelPlan = {
		id: 1,
		destination: 'Paris',
		startDate: '2025-12-01',
		endDate: '2025-12-10',
		description: 'Winter in Paris',
		budget: '5000',
	};

	beforeEach(() => {
		mockOnSubmit.mockClear();
		mockOnCancel.mockClear();
	});

	it('renders empty form correctly', () => {
		render(<TravelPlanForm {...defaultProps} />);

		expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/budget/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /add plan/i })
		).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
	});

	it('renders form with edit data correctly', () => {
		render(<TravelPlanForm {...defaultProps} editPlan={mockTravelPlan} />);

		expect(screen.getByLabelText(/destination/i)).toHaveValue(
			mockTravelPlan.destination
		);
		expect(screen.getByLabelText(/start date/i)).toHaveValue(
			mockTravelPlan.startDate
		);
		expect(screen.getByLabelText(/end date/i)).toHaveValue(
			mockTravelPlan.endDate
		);
		expect(screen.getByLabelText(/description/i)).toHaveValue(
			mockTravelPlan.description
		);
		expect(screen.getByLabelText(/budget/i)).toHaveValue(
			Number(mockTravelPlan.budget)
		);
		expect(
			screen.getByRole('button', { name: /update plan/i })
		).toBeInTheDocument();
	});

	it('handles input changes correctly', async () => {
		render(<TravelPlanForm {...defaultProps} />);
		const destinationInput = screen.getByLabelText(/destination/i);

		await userEvent.type(destinationInput, 'Tokyo');
		expect(destinationInput).toHaveValue('Tokyo');
	});

	it('submits form with correct data', async () => {
		render(<TravelPlanForm {...defaultProps} />);

		await userEvent.type(screen.getByLabelText(/destination/i), 'Tokyo');
		await userEvent.type(screen.getByLabelText(/start date/i), '2025-09-01');
		await userEvent.type(screen.getByLabelText(/end date/i), '2025-09-10');
		await userEvent.type(screen.getByLabelText(/description/i), 'Japan Trip');
		await userEvent.type(screen.getByLabelText(/budget/i), '3000');

		fireEvent.submit(screen.getByRole('form'));

		expect(mockOnSubmit).toHaveBeenCalledWith({
			destination: 'Tokyo',
			startDate: '2025-09-01',
			endDate: '2025-09-10',
			description: 'Japan Trip',
			budget: '3000',
		});
	});

	it('resets form after submission', async () => {
		render(<TravelPlanForm {...defaultProps} />);

		await userEvent.type(screen.getByLabelText(/destination/i), 'Tokyo');
		fireEvent.submit(screen.getByRole('form'));

		expect(screen.getByLabelText(/destination/i)).toHaveValue('');
	});

	it('calls onCancel when cancel button is clicked', () => {
		render(<TravelPlanForm {...defaultProps} />);

		fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
		expect(mockOnCancel).toHaveBeenCalled();
	});

	it('updates form when editPlan prop changes', () => {
		const { rerender } = render(<TravelPlanForm {...defaultProps} />);

		rerender(<TravelPlanForm {...defaultProps} editPlan={mockTravelPlan} />);

		expect(screen.getByLabelText(/destination/i)).toHaveValue(
			mockTravelPlan.destination
		);
		expect(screen.getByLabelText(/budget/i)).toHaveValue(
			Number(mockTravelPlan.budget)
		);
	});

	it('shows browser validation for required fields', () => {
		render(<TravelPlanForm {...defaultProps} />);

		// Check form validation

		// Check that all inputs have the required attribute
		expect(screen.getByLabelText(/destination/i)).toBeRequired();
		expect(screen.getByLabelText(/start date/i)).toBeRequired();
		expect(screen.getByLabelText(/end date/i)).toBeRequired();
		expect(screen.getByLabelText(/description/i)).toBeRequired();
		expect(screen.getByLabelText(/budget/i)).toBeRequired();
	});
});
