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
			return <span>null</span>;
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
			<div>
				<button onClick={() => toggleExpand(currentPath)}>
					<span>{isExpanded ? '▼' : '►'}</span>
					<span>{Object.keys(obj).length} properties</span>
				</button>

				{isExpanded && (
					<div>
						<table>
							<thead>
								<tr>
									<th>Key</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(obj).map(([key, value]) => (
									<tr key={key}>
										<td>{key}</td>
										<td>{renderValue(value, `${currentPath}.${key}`)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	};

	// Function to render arrays
	const renderArray = (arr, currentPath) => {
		const isExpanded = expandedPaths[currentPath];

		return (
			<div>
				<button onClick={() => toggleExpand(currentPath)}>
					<span>{isExpanded ? '▼' : '►'}</span>
					<span>Array [{arr.length}]</span>
				</button>

				{isExpanded && (
					<div>
						<table>
							<thead>
								<tr>
									<th>Index</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{arr.map((value, index) => (
									<tr key={index}>
										<td c>{index}</td>
										<td>{renderValue(value, `${currentPath}[${index}]`)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	};

	// Main table rendering for the root object
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(data).map(([key, value]) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{renderValue(value, key)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default NestedObjectTable;
