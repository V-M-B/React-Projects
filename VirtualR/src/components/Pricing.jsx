import React from "react";
import {CheckCircle2} from "../constants"

import { pricingOptions } from "../constants";

export function Pricing() {
  return (
    <div className="mt-20">
      {/* heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      {/* card */}
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div className="w- full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="p-10 border border-neutral-600 rounded-xl ">
                {/* card title inside para*/}
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/*Price in card  */}
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2"> 
                    {option.price}
                </span>
                <span className="text-neutral-400 tracking-tight ">/Month</span>
              </p>
            
            {/* features */}
            <ul>
                {option.features.map((feature,index)=>(
                    <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2/>
                        <span className="ml-2">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Subscribe button */}
            <a href="#" className="inline-flex justify-center text-center w-full tracking-tight mt-5  hover:bg-orange-900  border border-orange-900 rounded-xl transition duration-200"> Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
