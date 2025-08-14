import React from 'react';
import NestedObjectTable from './NestedObjectTable';

// Sample data from the user's example
const sampleData = {
	name: 'Example Inc.',
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zipCode: '91234',
	},
	department: {
		name: 'Logistics',
		employees: [
			{
				id: 1,
				name: 'John Doe',
				title: 'CEO',
			},
			{
				id: 2,
				name: 'Jane Smith',
				title: 'CTO',
			},
		],
	},
};

function NestedObjectViewer() {
	return (
		<div>
			<div>
				<h1>Object Viewer</h1>
				<NestedObjectTable data={sampleData} />
			</div>
		</div>
	);
}

export default NestedObjectViewer;
