import React from "react";
const SectionHeader = ({ title, viewAllLink }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <a href={viewAllLink} className="text-black hover:underline">
        View All
      </a>
    </div>
  );
};
export default SectionHeader;
