import React from "react";
import NitroTechProtienImage from "../assets/nitrotech-protein.svg.svg";
import Button from "./Button";
import { modalAtom } from "../jotai-provider";
import { useAtom } from "jotai";
const SupplementShowcase = () => {
  const [_, setIsOpen] = useAtom(modalAtom);
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-16 h-[80vh] flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 container mx-auto items-center">
          <div className="md:col-span-2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold tracking-tight text-[#100F1A] sm:text-6xl md:leading-line  ">
              WORKOUT ESSENTIAL SUPPLEMENTS
            </h2>
            <p className="text-gray-600 mb-6 mt-10 text-[15px]">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface.
            </p>
            <Button onClick={() => setIsOpen(true)} size={"w-[180px]"}>
              Buy Now
            </Button>
          </div>
          <div className="md:block hidden col-span-2">
            <img
              width={600}
              src={NitroTechProtienImage}
              alt="MuscleTech NitroTech Whey Protein"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default SupplementShowcase;
