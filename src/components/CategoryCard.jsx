import React from "react";

const CategoryCard = ({ title, image, backgroundColor }) => {
  return (
    <div
      className={`rounded-lg relative p-4 flex items-center justify-between ${backgroundColor}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <img src={image} alt={title} className="w-20 h-20 object-contain" />
    </div>
  );
};

export default CategoryCard;
