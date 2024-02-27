import Image from "next/image";
import React from "react";

export default function Pricecard({
  btn1,
  btn2,
  title,
  content,
  price,
  buttonText,
}) {
  return (
    <div className="bg-white rounded-lg w-61 p-3 m-3 my-10">
      <div className="py-5 flex items-center justify-center pb-10">
        <Image
          src="/images/img1.png"
          alt="Your Image Alt Text"
          width={141}
          height={103}
        />
      </div>
      <div>
        <div className="flex ">
          <button
            type="button"
            className="text-blue-500 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1   mb-2 dark:bg-white border dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-1"
          >
            {btn1}
          </button>
          <button
            type="button"
            className="text-blue-500 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1   mb-2 dark:bg-white border dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-1"
          >
            {btn2}
          </button>
        </div>
        <div className="flex items-center justify-center mx-1">{title}</div>
        <div className="text-sm mx-1">{content}</div>
        <div className="text-lg py-4 mx-1">{price}</div>
        <div className="py-2 mx-1">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-full mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
