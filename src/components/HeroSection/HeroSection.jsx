import React from "react";
import logo from "../../images/BgImages/HeroBgImg.jpeg";
import NavBarCustom from "./NavBarCustom";

function App() {

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover "
        style={{
          backgroundImage: `url(${logo})`,
          backgroundAttachment: 'fixed',
        }}
        role="img"
        aria-label="Hero Background"
      ></div>

      {/*Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center text-white justify-evenly">
        {/* Navbar */}
        <NavBarCustom />

        {/* Welcome Message */}
        <div className="flex items-center justify-center flex-grow ">
          <div className="flex justify-center items-center flex-col gap-2 w-[50%] h-[50%]">
            <p className="clear-both text-white font-mont font-semibold md:text-[12px] text-[10px] tracking-[2px] leading-[13.75px] break-words uppercase">
              Casual & Everyday
            </p>
            <h1 className="md:text-[76px] text-2xl font-bold italic break-words text-center font-mainHead leading-none mb-6">
              Effortlessly Blend Comfort & Style!
            </h1>
            <p className="font-mont text-[8px] md:text-[16px] font-semibold text-center mb-4">
              Effortlessly blend comfort and style with our Casual & Everyday
              collection, featuring cozy sweaters, versatile denim, laid-back
              tees, and relaxed-fit joggers for your everyday adventures
            </p>
            <div>
              <button className="md:text-[14px] text-sm uppercase text-white border border-white font-mont font-semibold  md:py-4 md:px-10 py-2 px-4 hover:bg-white hover:text-black">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
