import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons4 } from "./ButtonProps";

const ContentCreation = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598028/hzm18n7gqirt8nd0wmik.png";

  const firstList = buttons4.filter(
    (item) =>
      item.text === "Video production" || item.text === "Audio production"
  );

  const secondList = buttons4.filter(
    (item) => item.text === "Graphic design" || item.text === "Copywriting"
  );
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-8 lg:p-10">
        {/* Left texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Content Creation Services"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
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
                    item.text === "Video production"
                      ? "w-[201px] h-[64px]"
                      : item.text === "Audio production"
                      ? "w-[201px] h-[64px]"
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
                    item.text === "Graphic design"
                      ? "w-[182px] h-[64px]"
                      : item.text === "Copywriting"
                      ? "w-[154px] h-[64px]"
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

export default ContentCreation;
