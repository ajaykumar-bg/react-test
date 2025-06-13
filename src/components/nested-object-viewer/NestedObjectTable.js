import React, { useState } from 'react';

// Recursive component to render nested objects
const NestedObjectTable = ({ data, path = '' }) => {
	const [expandedPaths, setExpandedPaths] = useState({});

	// Function to toggle expanded state for a path
	const toggleExpand = (path) => {
		setExpandedPaths((prev) => ({
			...prev,
			[path]: !prev[path],
		}));
	};

	// Function to render a value based on its type
	const renderValue = (value, currentPath) => {
		if (value === null || value === undefined) {
			return <span className='text-gray-500'>null</span>;
		}

		if (typeof value === 'object' && !Array.isArray(value)) {
			// It's an object
			return renderNestedObject(value, currentPath);
		} else if (Array.isArray(value)) {
			// It's an array
			return renderArray(value, currentPath);
		} else {
			// It's a primitive value
			return <span>{String(value)}</span>;
		}
	};

	// Function to render nested objects
	const renderNestedObject = (obj, currentPath) => {
		const isExpanded = expandedPaths[currentPath];

		return (
			<div className='ml-4'>
				<button
					onClick={() => toggleExpand(currentPath)}
					className='flex items-center text-blue-600 hover:text-blue-800'
				>
					<span className='mr-1'>{isExpanded ? '▼' : '►'}</span>
					<span className='font-semibold'>
						{Object.keys(obj).length} properties
					</span>
				</button>

				{isExpanded && (
					<table className='w-full border-collapse mt-2'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 px-4 py-2 text-left'>
									Key
								</th>
								<th className='border border-gray-300 px-4 py-2 text-left'>
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(obj).map(([key, value]) => (
								<tr key={key} className='border-t border-gray-200'>
									<td className='border border-gray-300 px-4 py-2 font-medium'>
										{key}
									</td>
									<td className='border border-gray-300 px-4 py-2'>
										{renderValue(value, `${currentPath}.${key}`)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	};

	// Function to render arrays
	const renderArray = (arr, currentPath) => {
		const isExpanded = expandedPaths[currentPath];

		return (
			<div className='ml-4'>
				<button
					onClick={() => toggleExpand(currentPath)}
					className='flex items-center text-blue-600 hover:text-blue-800'
				>
					<span className='mr-1'>{isExpanded ? '▼' : '►'}</span>
					<span className='font-semibold'>Array [{arr.length}]</span>
				</button>

				{isExpanded && (
					<table className='w-full border-collapse mt-2'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 px-4 py-2 text-left'>
									Index
								</th>
								<th className='border border-gray-300 px-4 py-2 text-left'>
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							{arr.map((value, index) => (
								<tr key={index} className='border-t border-gray-200'>
									<td className='border border-gray-300 px-4 py-2 font-medium'>
										{index}
									</td>
									<td className='border border-gray-300 px-4 py-2'>
										{renderValue(value, `${currentPath}[${index}]`)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	};

	// Main table rendering for the root object
	return (
		<div className='p-4'>
			<h2 className='text-xl font-bold mb-4'>Nested Object Viewer</h2>
			<table className='w-full border-collapse'>
				<thead>
					<tr className='bg-gray-200'>
						<th className='border border-gray-300 px-4 py-2 text-left'>Key</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>
							Value
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(data).map(([key, value]) => (
						<tr key={key} className='border-t border-gray-200'>
							<td className='border border-gray-300 px-4 py-2 font-medium'>
								{key}
							</td>
							<td className='border border-gray-300 px-4 py-2'>
								{renderValue(value, key)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default NestedObjectTable;
