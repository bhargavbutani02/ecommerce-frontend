import React from "react";
import shopbyimg1 from "../assets/shopbyimg1.jpg";
import shopbyimg2 from "../assets/shopbyimg2.png";
import shopbyimg3 from "../assets/shopbyimg3.jpg";
import shopbyimg4 from "../assets/shopbyimg4.jpg";
import shopbyimg5 from "../assets/shopbyimg5.jpg";
import shopbyimg6 from "../assets/shopbyimg6.jpg";

const ShopbyBrand = () => {
  return (
    <div
      className="bg-image py-16 "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        {" "}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Shop By Brand</h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4  ">
          <img className="rounded" src={shopbyimg1} alt="image" />
          <img className="rounded" src={shopbyimg2} alt="image" />
          <img className="rounded" src={shopbyimg3} alt="image" />
          <img className="rounded" src={shopbyimg4} alt="image" />
          <img className="rounded" src={shopbyimg5} alt="image" />
          <img className="rounded" src={shopbyimg6} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ShopbyBrand;
