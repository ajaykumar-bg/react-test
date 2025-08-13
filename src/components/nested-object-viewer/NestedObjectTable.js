import React, { useState } from "react";

// Recursive component to render nested objects
const NestedObjectTable = ({ data, path = "" }) => {
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
      return <span className="text-gray-500">null</span>;
    }

    if (typeof value === "object" && !Array.isArray(value)) {
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
      <div className="ml-4 my-2">
        <button
          onClick={() => toggleExpand(currentPath)}
          className="flex items-center text-blue-600 hover:text-blue-800 py-1 px-2 rounded hover:bg-blue-50 transition-colors"
        >
          <span className="mr-2 transform transition-transform duration-200 inline-block">
            {isExpanded ? "▼" : "►"}
          </span>
          <span className="font-medium">
            {Object.keys(obj).length} properties
          </span>
        </button>

        {isExpanded && (
          <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                    Key
                  </th>
                  <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(obj).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                      {key}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-600">
                      {renderValue(value, `${currentPath}.${key}`)}
                    </td>
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
      <div className="ml-4 my-2">
        <button
          onClick={() => toggleExpand(currentPath)}
          className="flex items-center text-blue-600 hover:text-blue-800 py-1 px-2 rounded hover:bg-blue-50 transition-colors"
        >
          <span className="mr-2 transform transition-transform duration-200 inline-block">
            {isExpanded ? "▼" : "►"}
          </span>
          <span className="font-medium">Array [{arr.length}]</span>
        </button>

        {isExpanded && (
          <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                    Index
                  </th>
                  <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {arr.map((value, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                      {index}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-600">
                      {renderValue(value, `${currentPath}[${index}]`)}
                    </td>
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
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Key
            </th>
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="hover:bg-gray-50">
              <td className="border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                {key}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-600">
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
