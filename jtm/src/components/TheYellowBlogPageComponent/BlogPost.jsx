import React from "react";
import { blogs } from "./BlogPageObject";

const BlogPost = () => {
  return (
    <article className="grid lg:grid-cols-3 py-10 gap-8 items-center justify-center w-full lg:w-10/12 mx-auto">
      {blogs.map((items) => {
        return (
          <div className="space-y-4 border border-gray-300 w-11/12 lg:w-full mx-auto p-5 rounded-2xl bg-white shadow">
            <div>
              <img src={items.image} alt="" className="w-96 rounded-2xl" />
            </div>
            <div className="font-inter text-gray-800 lg:w-full space-y-4">
              <h2 className="text-xl">{items.title}</h2>
              <p className="text-base font-normal text-justify">
                {items.bodyText}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#DB2A5B] font-inter font-normal text-base">
                {items.name}
              </h3>
              <p className="text-gray-600">{items.date}</p>
              <p className="font-normal text-base text-gray-600 font-inter">
                {items.Time}
              </p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default BlogPost;
