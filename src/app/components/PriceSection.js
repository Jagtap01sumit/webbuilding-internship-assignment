import React from "react";
import Pricecard from "../common/cards/Pricecard";
import { PriceCard } from "../config";

export default function PriceSection() {
  return (
    <div className="">
      <div className="lg:px-64 text-black px-12">
        <h1 className="font-light text-2xl pt-4 sm:pt-5 sm:text-2xl lg:text-2xl lg:pt-9 text-black">
          Related deals you might like for
        </h1>
        <div className="flex lg:flex-row sm:flex-col items-center justify-center flex-col">
          {PriceCard.map((item, index) => (
            <Pricecard
              key={item.id}
              btn1={item.btn1}
              btn2={item.btn2}
              title={item.title}
              content={item.content}
              price={item.price}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
