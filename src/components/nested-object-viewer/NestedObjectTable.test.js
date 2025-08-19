import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NestedObjectTable from "./NestedObjectTable";

describe("NestedObjectTable", () => {
  const simpleData = {
    name: "John",
    age: 30,
  };

  const nestedData = {
    person: {
      name: "John",
      age: 30,
    },
  };

  const arrayData = {
    people: ["John", "Jane"],
  };

  const complexData = {
    department: {
      name: "Engineering",
      employees: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ],
    },
  };

  test("renders simple object properties", () => {
    render(<NestedObjectTable data={simpleData} />);
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("age")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });

  test("renders nested object with expand/collapse", () => {
    render(<NestedObjectTable data={nestedData} />);
    expect(screen.getByText("person")).toBeInTheDocument();

    const expandButton = screen.getByText("►");
    fireEvent.click(expandButton);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });

  test("renders arrays with expand/collapse", () => {
    render(<NestedObjectTable data={arrayData} />);
    expect(screen.getByText("people")).toBeInTheDocument();

    const expandButton = screen.getByText("►");
    fireEvent.click(expandButton);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });

  test("handles null values", () => {
    const nullData = { value: null };
    render(<NestedObjectTable data={nullData} />);
    expect(screen.getByText("null")).toBeInTheDocument();
  });

  test("toggles nested content visibility", () => {
    render(<NestedObjectTable data={complexData} />);

    const expandButton = screen.getByText("►");
    fireEvent.click(expandButton);

    expect(screen.getByText("Engineering")).toBeInTheDocument();
    expect(screen.getByText("employees")).toBeInTheDocument();

    const collapseButton = screen.getByText("▼");
    fireEvent.click(collapseButton);
    expect(screen.queryByText("Engineering")).toBeNull();
  });
});
