import React from "react";
import Images from "../assets/add.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./Button";

const Bestdeals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="border rounded-lg  shadow-lg">
        <div className="flex">
          <div className="m-10">
            <p className="text-[38px] font-bold leading-9">
              Best deals for <br />
              <span className="text-[#68C2EE] ">Vitamin tablets</span>{" "}
            </p>
            <p className="font-medium mt-8 text-gray-400 text-[14px]">
              In publishing and graphic design, Lorem ipsum is a placeholder
            </p>
            <div className="mt-6">
              <Button size={"w-full"}>
                Proceed to order <MdKeyboardArrowRight />
              </Button>{" "}
            </div>
          </div>

          <div>
            <img className="rounded-r-lg" src={Images}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeals;
