import React from 'react';
import { render, act } from '@testing-library/react';
import { useContext } from 'react';
import TravelPlanProvider, { TravelPlanContext } from './TravelPlanContext';
import { DEFAULT_TRAVEL_PLANS } from './travelPlans.mocks';

// Test component to access context values
const TestComponent = ({ onContextValue }) => {
	const contextValue = useContext(TravelPlanContext);
	onContextValue(contextValue);
	return null;
};

describe('TravelPlanContext', () => {
	let contextValue;
	const setContextValue = (value) => {
		contextValue = value;
	};

	beforeEach(() => {
		contextValue = null;
	});

	it('should initialize with default travel plans', () => {
		render(
			<TravelPlanProvider>
				<TestComponent onContextValue={setContextValue} />
			</TravelPlanProvider>
		);
		expect(contextValue.travelPlans).toEqual(DEFAULT_TRAVEL_PLANS);
	});

	it('should add a new travel plan', () => {
		render(
			<TravelPlanProvider>
				<TestComponent onContextValue={setContextValue} />
			</TravelPlanProvider>
		);
		const newPlan = {
			destination: 'Paris',
			startDate: '2025-12-01',
			endDate: '2025-12-10',
			description: 'Winter in Paris',
			budget: '150000',
		};

		act(() => {
			contextValue.addTravelPlan(newPlan);
		});

		expect(contextValue.travelPlans).toHaveLength(
			DEFAULT_TRAVEL_PLANS.length + 1
		);
		const addedPlan =
			contextValue.travelPlans[contextValue.travelPlans.length - 1];
		expect(addedPlan).toMatchObject(newPlan);
		expect(addedPlan.id).toBeDefined();
	});

	it('should edit an existing travel plan', () => {
		render(
			<TravelPlanProvider>
				<TestComponent onContextValue={setContextValue} />
			</TravelPlanProvider>
		);
		const existingPlan = DEFAULT_TRAVEL_PLANS[0];
		const updatedPlan = {
			...existingPlan,
			destination: 'Updated Maldives',
			description: 'Updated Resort Stay',
		};

		act(() => {
			contextValue.editTravelPlan(existingPlan.id, updatedPlan);
		});

		const editedPlan = contextValue.travelPlans.find(
			(plan) => plan.id === existingPlan.id
		);
		expect(editedPlan).toEqual(updatedPlan);
	});

	it('should delete a travel plan', () => {
		render(
			<TravelPlanProvider>
				<TestComponent onContextValue={setContextValue} />
			</TravelPlanProvider>
		);
		const planToDelete = DEFAULT_TRAVEL_PLANS[0];
		const initialLength = contextValue.travelPlans.length;

		act(() => {
			contextValue.deleteTravelPlan(planToDelete.id);
		});

		expect(contextValue.travelPlans).toHaveLength(initialLength - 1);
		expect(
			contextValue.travelPlans.find((plan) => plan.id === planToDelete.id)
		).toBeUndefined();
	});

	it('should clear all travel plans', () => {
		render(
			<TravelPlanProvider>
				<TestComponent onContextValue={setContextValue} />
			</TravelPlanProvider>
		);
		act(() => {
			contextValue.clearTravelPlans();
		});

		expect(contextValue.travelPlans).toHaveLength(0);
	});
});
