import React, { useEffect, useState } from "react";
import Button from "./Button";
import { LuShoppingCart } from "react-icons/lu";
import Like from "../assets/like.svg";
import Share from "../assets/share.svg";
import axios from "axios";
import { toast } from "react-toastify";
import Toggle from "./ToggleButton";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white relative p-4 rounded-lg shadow-sm border">
      <div className="flex justify-center">
        <img
          src={`${process.env.REACT_APP_API_URI}/${product.images}`}
          alt={product.name}
          className=" h-48 object-cover mb-4"
        />
      </div>
      <h3 className="font-medium text-sm text-[#41404A]">
        {product.description}
      </h3>
      <p className="text-[#707074]">{product.weight}</p>
      <p className="text-[#707074] text-xs line-through">
        MRP : {product.mrp.toLocaleString("en-IN")}
      </p>
      <div className="flex gap-2 items-center mt-2">
        <span className="font-medium">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        <span className="text-green-500 text-xs">{product.discount}% Off</span>
      </div>
      <div className="mt-2">
        <Button size={"w-full"} type={"outline"}>
          <div className="flex justify-center gap-2 items-center">
            <LuShoppingCart /> Add to Cart
          </div>
        </Button>
      </div>
      <div className="flex gap-2 absolute top-4 right-3">
        <img src={Like} alt="" srcset="" /> <img src={Share} alt="" srcset="" />
      </div>
    </div>
  );
};
export const ProductGrid = ({ showCount }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const productResponse = await axios.get(
          `${process.env.REACT_APP_API_URI}/product`
        );
        if (productResponse?.data) {
          setProducts(productResponse.data);
        } else {
          toast.error(productResponse?.data?.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    })();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {showCount === 0
        ? products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        : products
            .slice(0, showCount)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
    </div>
  );
};

const PopularProducts = () => {
  const [activeOption, setActiveOption] = useState("Best Sellers");
  return (
    <div className="bg-gradient-to-l  ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular</h2>
          <a href="#" className="text-blue-600">
            View All
          </a>
        </div>
        <div className="mb-6">
          <Toggle
            options={["Best Sellers", "Category's"]}
            activeOption={activeOption}
            onToggle={setActiveOption}
          />
        </div>
        <div className="">
          <ProductGrid showCount={0} />
        </div>
      </div>
    </div>
  );
};
export default PopularProducts;
