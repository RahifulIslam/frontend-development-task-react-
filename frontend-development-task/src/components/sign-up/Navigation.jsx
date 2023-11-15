import React, { useRef, useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const languages = ["English (UK)", "Bengali (BD)"];
  
  const menuRef = useRef();
  const buttonRef = useRef();

  window.addEventListener("click", (e) => {
    // console.log(e.target === menuRef.current)
    if (e.target !== menuRef.current && e.target !== buttonRef.current) {
      setOpen(false);
    }
  });
  return (
    <>
      <div className="relative flex justify-between">
        <div className="flex items-center gap-3"> 
          <img className="h-[44px] w-[50px]" src="/icons/paper 1.png" alt="" />
          <p className="text-[#4E5D78] font-[Inter] text-[28px] font-[700]">
            Stack
          </p>
        </div>

        <div class="inline-block text-left relative">
          <button
            type="button"
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            class="inline-flex justify-center items-center w-[146px] h-[43px] shrink-[0] rounded-[16px] bg-[#F0F5FA] text-[#B0B7C3] font-['Inter'] text-[12px] font-[500] gap-8"
          >
            English (UK)
            <img
              className="h-[5px] w-[9px] shrink-[0] stroke-[2px] stroke-[#B0B7C3]"
              src="/icons/Vector.png"
              alt=""
            />
          </button>
          {open && (
            <div
              ref={menuRef}
              class="bg-white p-4 shadow-lg absolute top-17"
            >
              <ul className="space-y-2">
                {languages.map((language) => (
                  <li
                    onClick={() => setOpen(false)}
                    className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                    key={language}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
