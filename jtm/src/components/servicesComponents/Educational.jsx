import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons5 } from "./ButtonProps";

const Educational = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598031/gux3ww8gvq1jhrrz25k2.png";

    const firstList = buttons5.filter((item) => item.text === "Spiritual development" || item.text === "Christian resources")

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 lg:p-10">
        {/* Left side (Image) */}
        <div className="w-11/12 mx-auto lg:w-1/2">
          <ImageProps img={image} />
        </div>
        {/* Right texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Educational Resources"
              paragraph="Nurture your faith and foster your spiritual growth with our comprehensive collection of Christian educational materials. We offer a range of resources designed to deepen understanding, encourage devotion, and support spiritual development for individuals, groups, and churches."
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
                    item.text === "Spiritual development"
                      ? "w-[244px] h-[64px]"
                      : item.text === "Christian resources"
                      ? "w-[222px] h-[64px]"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-white dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            {/* Second list */}
            {/* <div className="flex items-center  justify-center lg:justify-normal  gap-2 lg:gap-3">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
