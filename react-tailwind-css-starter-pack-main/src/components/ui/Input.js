import React from "react";

const Input = ({ type, id, placeholder, value, onChange, icon: Icon }) => (
  <div className="relative">
    {Icon && <Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />}
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default Input;
