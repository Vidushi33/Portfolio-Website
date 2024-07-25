import { NAVBAR_ITEMS } from "@/utils/constants";
import React from "react";

export default function Navbar() {
  return (
    <div className=" relative  flex justify-between items-center py-4 px-8">
      <div className="logo-text font-bold text-5xl text-[#00ffff49]">PORTFOLIO</div>

      <div className="flex gap-8">
        {NAVBAR_ITEMS.map((item, index) => (
          <p
            key={index}
            className="font-semibold text-xl cursor-pointer hover:text-textTeal"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}
