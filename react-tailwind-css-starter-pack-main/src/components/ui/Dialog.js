import React from "react";
import { X } from "lucide-react";

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
