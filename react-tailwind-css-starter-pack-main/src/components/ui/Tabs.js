import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b">
      {["login", "register"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-2 text-center ${
            activeTab === tab ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"
          }`}
        >
          {tab === "login" ? "Login" : "Register"}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
