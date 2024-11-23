import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="w-full h-screen text-white pt-1 ">
      <div className="textstructure mt-36 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.8vw] relative top-[-1.2vw]  bg-red-500"></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-semibold font-['Founders_Grotesk_X']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-12 flex justify-between items-cente py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full  ">
            start the project{" "}
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
