import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {children}
    </div>
  );
};

export default Card;
