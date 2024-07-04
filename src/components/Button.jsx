import React from "react";
const Button = ({ children = null, size, type, onClick = () => {} }) => {
  return (
    <button
      className={`whitespace-nowrap flex gap-2 items-center justify-center bg-gradient-to-r ${size}  ${
        type !== "outline"
          ? "from-[#65C2ED] to-[#F1ADFF] hover:from-[#a4dbf5] hover:to-[#eca0fc] text-white"
          : "border hover:border-black"
      }  px-4 py-2 rounded-md  transition duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
