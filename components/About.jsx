import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full md:h-screen py-8 bg-[url('/assets/bg.png')] bg-blue-900">
        <div className="max-w-[1240px] mx-auto text-center px-4">
          <div className="font-bold text-yellow-600 text-3xl uppercase">
            <h2>About</h2>
          </div>
          <div className="w-[90%] mx-auto text-lg md:text-left lg:text-left text-center">
            <p className="py-4">
              Welcome to our esteemed buying house, where fashion meets
              excellence! We pride ourselves on exporting high-quality readymade
              garments to the crème de la crème of global markets, including the
              USA, UK, Canada, Dubai, and Russia. Our product portfolio is a
              symphony of styles, featuring denim, T-shirts, polo shirts,
              jackets, sweaters, trousers, and more, tailored to perfection for
              men, women, boys, and girls.
            </p>
            <p className="py-4">
              With a rich history and a mission to excel, we’re dedicated to
              delivering exceptional quality, unparalleled customer service, and
              unmatched expertise in the garment industry. Our team of
              visionaries and craftsmen ensure that every stitch, every seam,
              and every thread is a testament to our commitment to excellence.
            </p>
            <p className="py-4">
              Join us on this journey, as we weave together fashion, quality,
              and passion, to create a world of style and elegance. Let our
              story be the foundation of your next chapter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
