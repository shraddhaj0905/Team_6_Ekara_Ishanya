import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition ${className}`}
  >
    {children}
  </button>
);

export default Button;
