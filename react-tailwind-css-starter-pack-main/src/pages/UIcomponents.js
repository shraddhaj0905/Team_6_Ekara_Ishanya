import React from "react";

// Card Component
export function Card({ children, className = "" }) {
  return <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>{children}</div>;
}

// Button Component
export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

// Table Components
export function Table({ children }) {
  return <table className="w-full border-collapse">{children}</table>;
}

export function TableHeader({ children }) {
  return <thead className="bg-gray-200">{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableHead({ children }) {
  return <th className="p-2 text-left">{children}</th>;
}

export function TableCell({ children }) {
  return <td className="p-2">{children}</td>;
}

// Select Dropdown
export function Select({ children, onChange }) {
  return (
    <select
      onChange={onChange}
      className="px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
    >
      {children}
    </select>
  );
}

// Input Component
export function Input({ type, onChange }) {
  return (
    <input
      type={type}
      onChange={onChange}
      className="px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
    />
  );
}
