import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      <h1 className="font-['Neue_Montreal text-[3.5vw] font-bolder leading-[4.5vw] tracking-tighter">
        Ochi is a strategic presentation agency for forward-thinking businesses 
        that need to raise funds, sell products, <br /> explain complex ideas, and hire 
        great people.
      </h1>

      <div className="w-full border-t-[1px] flex gap-5
       border-[#a1b562] mt-20 pt-10">
        <div className="w-1/2">
        <h1 className="text-6xl">Our Approach:</h1>
        <button className="px-6 py-4 flex uppercase gap-10 items-center bg-zinc-900 rounded-full text-white mt-10">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
        </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#afc757]">
        <img className="object-cover w-full h-[70vh] rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
