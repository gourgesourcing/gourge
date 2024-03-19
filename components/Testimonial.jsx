import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="w-full h-screen py-8">
        <div className="max-w-[1240px] mx-auto ">
          <div className="font-bold text-yellow-600 text-3xl uppercase py-8 text-center">
            <h2>Product Line-up</h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {/*  */}
            <div className="border-2 border-yellow-500 shadow-lg rounded-lg">
              <Image
                src="/assets/Knitwear.jpg"
                alt="Knitwear"
                width={500}
                height={250}
                className="object-cover rounded-t-lg"
              />

              <div className="flex justify-between px-2 py-2">
                <p>Knitwear</p>
              </div>
            </div>

            {/*  */}
            <div className="border-2 border-yellow-500 shadow-lg rounded-lg">
              <Image
                src="/assets/jeans.jpg"
                alt="jeans.jpg"
                width={500}
                height={250}
                className="object-cover rounded-t-lg"
              />

              <div className="flex justify-between px-2 py-2">
                <p>Denim</p>
              </div>
            </div>
            {/*  */}
            <div className="border-2 border-yellow-500 shadow-lg rounded-lg">
              <Image
                src="/assets/sweater.jpg"
                alt="Knitwear"
                width={500}
                height={250}
                className="object-cover rounded-t-lg"
              />

              <div className="flex justify-between px-2 py-2">
                <p>Sweater</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
