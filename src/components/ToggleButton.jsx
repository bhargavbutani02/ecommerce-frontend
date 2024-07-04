import React from "react";
const Toggle = ({ options, activeOption, onToggle }) => {
  return (
    <div className="flex gap-2 rounded-full p-1">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded-md ${
            activeOption === option
              ? "bg-black text-white"
              : "text-gray-700 border"
          }`}
          onClick={() => onToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Toggle;
