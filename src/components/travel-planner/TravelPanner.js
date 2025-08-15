import React, { useContext, useState } from 'react';
import { TravelPlanContext } from './TravelPlanContext';
import TravelPlanForm from './TravelPlanForm';
import TravelPlanList from './TravelPlanList';
import Modal from '../common/Modal/Modal';
import Main from '../common/Main/Main';

const TravelPlanner = () => {
	const [editingPlan, setEditingPlan] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {
		travelPlans,
		addTravelPlan,
		editTravelPlan,
		deleteTravelPlan,
		clearTravelPlans,
	} = useContext(TravelPlanContext);

	const handleSubmit = (planData) => {
		if (editingPlan) {
			editTravelPlan(editingPlan.id, planData);
		} else {
			addTravelPlan(planData);
		}
		setIsModalOpen(false);
		setEditingPlan(null);
	};

	const handleEdit = (id) => {
		const planToEdit = travelPlans.find((plan) => plan.id === id);
		setEditingPlan(planToEdit);
		setIsModalOpen(true);
	};

	return (
		<Main title='Travel Planner'>
			<button className='add-plan-btn' onClick={() => setIsModalOpen(true)}>
				Add New Plan
			</button>
			<div className='list-section'>
				<TravelPlanList
					travelPlans={travelPlans}
					onEdit={handleEdit}
					onDelete={deleteTravelPlan}
				/>
				{travelPlans.length > 0 && (
					<button className='clear-all-btn' onClick={clearTravelPlans}>
						Clear All Plans
					</button>
				)}
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
					setEditingPlan(null);
				}}
				title={editingPlan ? 'Edit Travel Plan' : 'Add New Travel Plan'}
			>
				<TravelPlanForm
					editPlan={editingPlan}
					onSubmit={handleSubmit}
					onCancel={() => {
						setIsModalOpen(false);
						setEditingPlan(null);
					}}
				/>
			</Modal>
		</Main>
	);
};

export default TravelPlanner;
