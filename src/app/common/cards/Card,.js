import React from "react";
import Image from "next/image";

export default function Card({
  image,
  imgName,
  boldtext1,
  text1,
  boldtext2,
  text2,
  cardnum,
  cardtext,
}) {
  return (
    <div className="bg-white p-2 rounded-md mt-2">
      <div className="h-8 lg:w-1/6 sm:w-2/6 rounded-r-lg flex items-center justify-center bg-orange-500 text-black">
        Best choice
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 text-black p-5  ">
        <div className="flex flex-col items-center justify-center ">
          <div className="l flex items-center justify-center">
            <Image
              src="/images/img1.png"
              alt="Your Image Alt Text"
              width={141}
              height={103}
            />
          </div>
          <p className="font-xs">{imgName}</p>
        </div>
        <div className="px-1 col-span-2">
          <div className="my-2 text-sm">
            <span className="font-bold">{boldtext1}</span>
            {text1}
          </div>
          <div>
            <span className="font-bold">{boldtext2}</span>
            <p className="ml-10 text-sm">{text2}</p>
            <div className="mt-10">
              <span>show more ^</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-center flex-col max-w-10 h-10 p-12 bg-blue-100 bg-opacity-50 rounded-lg">
            <h2>{cardnum}</h2>
            <h4 className="text-xs">{cardtext}</h4>
          </div>
          <div className="w-4/5">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-full mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
