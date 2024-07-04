import React from "react";
import { ProductGrid } from "./ProductList";

const JustLaunched = () => {
  return (
    <div className="bg-[#F5FBFF] py-16 mt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Just Launched</h2>
        </div>

        <ProductGrid showCount={4} />
      </div>
    </div>
  );
};

export default JustLaunched;
