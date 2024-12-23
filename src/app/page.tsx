"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl">
        <div className="flex flex-col p-8">
          <div className="text-xl font-bold   text-[#374151] pb-6">
            Generator
          </div>
          <div className=" text-base   text-[#374151]">
            Leverage a graphical editor to create, design and customize
            beautiful web components.
          </div>
          <div className="flex justify-end pt-6">
            <button className="bg-[#7e22ce] text-[#ffffff] w-full  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
              Try it out!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
