import React, { useState, useEffect } from 'react';

const TravelPlanForm = ({ editPlan, onSubmit, onCancel }) => {
	const [formData, setFormData] = useState({
		destination: '',
		startDate: '',
		endDate: '',
		description: '',
		budget: '',
	});

	useEffect(() => {
		if (editPlan) {
			setFormData(editPlan);
		}
	}, [editPlan]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormData({
			destination: '',
			startDate: '',
			endDate: '',
			description: '',
			budget: '',
		});
	};

	return (
		<form onSubmit={handleSubmit} className='travel-plan-form'>
			<div className='form-group'>
				<label htmlFor='destination'>Destination:</label>
				<input
					type='text'
					id='destination'
					name='destination'
					value={formData.destination}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='startDate'>Start Date:</label>
				<input
					type='date'
					id='startDate'
					name='startDate'
					value={formData.startDate}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='endDate'>End Date:</label>
				<input
					type='date'
					id='endDate'
					name='endDate'
					value={formData.endDate}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='description'>Description:</label>
				<textarea
					id='description'
					name='description'
					value={formData.description}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='budget'>Budget:</label>
				<input
					type='number'
					id='budget'
					name='budget'
					value={formData.budget}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='form-buttons'>
				<button type='submit'>{editPlan ? 'Update Plan' : 'Add Plan'}</button>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default TravelPlanForm;
