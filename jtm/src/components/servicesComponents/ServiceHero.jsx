import React from "react";

const ServiceHero = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728616768/Frame_147_wttcv9.png";
  
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Maintain aspect ratio, fill the background
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", // Full width
        height: "100vh", // Full viewport height
        display: 'absolute',
        top: "0px",

        // Media query for mobile screens
        '@media (max-width: 768px)': {
          backgroundSize: '100% 100%', // Stretch to fit width on mobile
          height: '100%', // Adjust height for mobile screens
        },
      }}
      className="relative"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full w-9/12 mx-auto">
        <h1 className="text-white p-4 text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-normal font-monstserrat">
          Our services
        </h1>
        <h2 className="text-white font-light text-base text-center md:text-start md:text-xl lg:text-2xl mt-4 max-w-2xl font-inter">
        We exist to provide you with strategies and ways that will elevate your brand without going to through the extreme
        </h2>
      </div>
    </section>
  );
};

export default ServiceHero;
