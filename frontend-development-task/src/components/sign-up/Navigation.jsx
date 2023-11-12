import React, { useState } from "react";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          {/* <div className="bg-gray-200">
          </div> */}
          <img className="h-[44px] w-[50px]" src="/icons/paper 1.png" alt="" />
          <p className="text-[#4E5D78] font-[Inter] text-[28px] font-[700]">
            Stack
          </p>
        </div>

        <div class="relative inline-block text-left">
          <button
            type="button"
            class="inline-flex justify-center items-center w-[146px] h-[43px] shrink-[0] rounded-[16px] bg-[#F0F5FA] text-[#B0B7C3] font-['Inter'] text-[12px] font-[500] gap-8"
          >
            English (UK)
            <img
              className="h-[5px] w-[9px] shrink-[0] stroke-[2px] stroke-[#B0B7C3]"
              src="/icons/Vector.png"
              alt=""
            />
          </button>
          <div class="hidden absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1">
              <a href="#" class="">
                Item 1
              </a>
              <a href="#" class="">
                Item 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
