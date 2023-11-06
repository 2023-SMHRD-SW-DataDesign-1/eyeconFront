import React from "react";

function PlanCard() {

  const image1 = "https://i.ibb.co/zbHnGYX/icon.png";
  const image2 = "https://i.ibb.co/M5rqSD4/icon-1.png";

  return (
    <div className="container mx-auto grid grid-cols-11 p-3 max-w-screen-xl font-Pretendard dark:text-[#F2F2F2]">

      {/* 여백용박스 */}
      <div className="col-span-0 md:col-span-1 dark:bg-gray-800 dark:text-[#F2F2F2]" />

      {/* 첫번쨰 박스 */}
      <div className="col-span-11 md:col-span-3 p-3 transition duration-300 hover:scale-110">
        <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7]">
          <div className="inline-block rounded-lg border border-[#5d6a85]">
            <p className="font-semibold text-left uppercase text-black px-3 dark:text-[#F2F2F2]">
              BASIC
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold p-5">￦25,000</p>
          </div>
          <div className="p-3">
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 코인 5개
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 10 Shares
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Custom Domains
            </p>
          </div>
        </div>
      </div>

      {/* 두번쨰 박스 */}
      <div className="col-span-11 md:col-span-3 p-3 transition duration-300 hover:scale-110">
        <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7]">
          <div className="inline-block rounded-lg border border-[#5d6a85]">
            <p className="font-semibold text-left uppercase text-black px-3 dark:text-[#F2F2F2]">
              BASIC
            </p>
          </div>
          <div className="text-center" >
            <p className="text-5xl font-bold p-5">￦75,000</p>
          </div>
          <div className="p-3">
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 코인 15개
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 125 Shares
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Analytics
            </p>
          </div>
        </div>
      </div>


      {/* 세번쨰 박스 */}
      <div className="col-span-11 md:col-span-3 p-3 transition duration-300 hover:scale-110">
        <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7]">
          <div className="inline-block rounded-lg border border-[#5d6a85]">
            <p className="font-semibold text-left uppercase text-black px-3 dark:text-[#F2F2F2]">
              BASIC
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold p-5">￦150,000</p>
          </div>
          <div className="p-3">
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 코인 30개
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Unlimited
            </p>
            <p className="text-xl p-3">
              <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
              <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Custom Brand
            </p>
          </div>
        </div>
      </div>

      {/* 여백용박스 */}
      <div className="col-span-0 md:col-span-1 dark:bg-gray-800 dark:text-[#F2F2F2]" />

    </div>
  );
}

export default PlanCard;