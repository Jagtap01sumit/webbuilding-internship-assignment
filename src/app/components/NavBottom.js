import React from "react";
import Card from "../common/cards/Card,";
import { cardData } from "../config";

export default function NavBottom() {
  return (
    <div className="flex align-center justify-center">
      <div className="lg:px-64 px-8 sm:px-8 w-full ">
        <h1 className="font-light text-2xl pt-4 sm:pt-5 sm:text-2xl lg:text-4xl lg:pt-9 text-black">
          Best Website builders in the US
        </h1>

        <hr className="h-px w-full my-2 sm: lg:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {cardData.map((item, index) => (
          <Card
            key={item.id}
            image={item.image}
            boldtext1={item.boldtext1}
            text1={item.text1}
            text2={item.text2}
            boldtext2={item.boldtext2}
            cardnum={item.cardnum}
            cardtext={item.cardtext}
          />
        ))}
      </div>
    </div>
  );
}
