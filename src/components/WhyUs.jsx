import React from 'react'
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WhyUs = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl mb-5 lg:text-6xl text-center tracking-wide">
        We Protect You From{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Cyber Attacks
        </span>
      </h2>
      <div className="p-2 flex flex-wrap justify-center">
        <div className="border border-blue-700 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding"/>
        </div>
        <div className="pt-5 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;