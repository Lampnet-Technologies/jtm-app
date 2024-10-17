import React from "react";

const BodyProps = (props) => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="">
        <div className="space-y-10 flex flex-col items-center lg:items-start lg:text-start">
          <h1 className="font-inter font-semibold text-2xl text-black dark:text-white">
            {props.header}
          </h1>
          <p className="text-xl font-normal font-inter text-black dark:text-white lg:text-start text-center">
            {props.paragraph}
          </p>
          <button className="bg-[#fabc52] text-black dark:text-white font-inter font-normal text-base rounded-full w-48 h-12">
            {props.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BodyProps;
