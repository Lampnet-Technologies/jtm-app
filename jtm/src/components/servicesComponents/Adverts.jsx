import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { button } from "./ButtonProps";

const Adverts = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598022/olgfq6epfbn5j82pdyie.png";
    
  // Separate the button items into two lists
  const firstList = button.filter(item => 
    item.text === "Radio & Tv" || item.text === "Podcasts" || item.text === "Blogs"
  );

  const secondList = button.filter(item => 
    item.text === "Newsletters" || item.text === "Sponsorships"
  );

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 lg:p-10">
        {/* left side (Image) */}
        <div className="w-11/12 mx-auto lg:w-1/2">
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Advertising and Sponsorship"
              paragraph="Grow your brand's visibility and reach your target audience through our diverse advertising mediums such as our radio, TV, podcasts, blogs, newsletters and sponsorship of our shows, segments and events"
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
                    item.text === "Radio & Tv" ? "w-32 h-[64px]" : 
                    item.text === "Podcasts" ? "w-[128px] h-[64px]" : 
                    item.text === "Blogs" ? "w-32 h-[64px]" : 
                    "w-25" // default width for remaining items
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
                    item.text === "Newsletters" ? "w-40 h-[64px]" : 
                    item.text === "Sponsorships" ? "w-44 h-[64px]" : 
                    "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-white dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adverts;
