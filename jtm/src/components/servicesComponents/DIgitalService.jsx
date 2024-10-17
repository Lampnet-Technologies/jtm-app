import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons3 } from "./ButtonProps";

const DigitalService = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598020/nvjq3xzp9vkrfphj33yl.png";

  const firstList = buttons3.filter(
    (item) =>
      item.text === "SEO Optimization" || item.text === "Website development"
  );
  const secondList = buttons3.filter(
    (item) => item.text === "Digital marketing campaign"
  );
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-8 lg:p-10">
        {/* Left texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Digital Service and Training"
              paragraph="Empower your organization with cutting-edge media strategies and skills. Our expert consulting and training services are tailored for churches, ministries, and Christian organizations seeking to enhance their digital presence and impact in content creation, social media management, and audience engagement."
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="flex flex-col gap-2">
            {/* First list */}
            <div className="flex items-center  justify-center lg:justify-normal  gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "SEO Optimization"
                      ? "w-[204px] h-[64px]"
                      : item.text === "Website development"
                      ? "w-[242px] h-[64px]"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-white dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            {/* Second list */}
            <div className="flex items-center  justify-center lg:justify-normal  gap-2 lg:gap-3">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Digital marketing campaign"
                      ? "w-[293px] h-[64px]"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-white dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>
        {/* Right side (Image) */}
        <div className="w-11/12 mx-auto lg:w-1/2">
          <ImageProps img={image} />
        </div>
      </div>
    </section>
  );
};

export default DigitalService;
