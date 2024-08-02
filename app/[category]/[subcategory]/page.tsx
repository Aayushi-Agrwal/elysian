import React from "react";
import Image from "next/image";

const SizeCircle = ({ size }: { size: string }) => {
  return <div className="size-circle">{size}</div>;
};
const page = () => {
  return (
    <div className="container lg:flex-row lg:gap-0 flex flex-col gap-8 items-center py-20">
      <div className="h-full lg:w-1/2 w-full flex justify-center items-center">
        <Image src="/product/1.jpg" height={400} width={400} alt="product" />
      </div>
      <div className="lg:w-1/2 w-2/3 h-full flex flex-col gap-3 justify-center">
        <div className="flex flex-col gap-2">
          <p className="uppercase text-2xl font-semibold">lulu & sky</p>
          <p className="font-light text-lg text-gray-500 border-b pb-3">
            Casual Top
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-6">
            <p className="text-2xl font-semibold">$32</p>
            <p className="text-gray-500 text-xl font-normal">
              MRP <span className="line-through">$52</span>
            </p>
          </div>
          <p className="text-green-600 font-medium text-sm">
            inclusive of all taxes
          </p>
        </div>

        <div className="flex flex-col gap-3 py-6">
          <p className="uppercase font-semibold text-sm">Select size</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            <SizeCircle size="xs" />
            <SizeCircle size="s" />
            <SizeCircle size="m" />
            <SizeCircle size="l" />
            <SizeCircle size="xl" />
            <SizeCircle size="2xl" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="uppercase flex justify-center py-4 rounded-md md:w-1/3 sm:w-1/2 w-full bg-[#D07373] text-white">
            add to bag
          </div>
          <div className="uppercase flex gap-2 justify-center py-4 px-2 rounded-md md:w-1/4 sm:w-1/3 w-full border border-gray-300">
            <Image
              src="/icons/heart.svg"
              alt="wishlist"
              height={20}
              width={20}
            />{" "}
            wishlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
