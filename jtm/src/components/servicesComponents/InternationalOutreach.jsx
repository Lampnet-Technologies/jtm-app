import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";

const InternationalOutreach = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598041/crmamyichi4cyzbzkmpu.png";
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white pb-20 lg:pb-0">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-8 lg:p-10">
        {/* Left texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="International Outreach"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
              button="Request Service"
            />
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

export default InternationalOutreach;
