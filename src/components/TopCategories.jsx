import React from "react";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";
import VitaminGelSVG from "../assets/Medical-Gel.svg";
import PillsSVG from "../assets/Pills.svg";
import VitaminComplexSVG from "../assets/Vitamin-Complex.svg";
import YellowPills from "../assets/Yellow-Pills.svg";
const TopCategories = () => {
  const categories = [
    {
      title: "Vitamins",
      image: VitaminComplexSVG,
      backgroundColor: "bg-green-100",
    },
    { title: "Medicine", image: PillsSVG, backgroundColor: "bg-red-100" },
    {
      title: "Home Healthcare",
      image: VitaminGelSVG,
      backgroundColor: "bg-blue-100",
    },
    {
      title: "Fish Oil & Omega",
      image: YellowPills,
      backgroundColor: "bg-yellow-100",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeader title="Top Category's" viewAllLink="/categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
            backgroundColor={category.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
};
export default TopCategories;
