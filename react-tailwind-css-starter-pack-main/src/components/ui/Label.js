import React from "react";

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-gray-700 font-medium">
    {children}
  </label>
);

export default Label;
