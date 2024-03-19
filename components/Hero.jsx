import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen py-8 heroGrad">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-full justify-center content-center"
          >
            <div className="uppercase text-center md:text-5xl text-3xl  dark:text-white font-bold drop-shadow-xl">
              <h1>
                WELCOME TO{" "}
                <span className="text-yellow-600">Gourgesourcing</span>
              </h1>
            </div>
            <div className="font-semibold text-center md:text-2xl dark:text-white py-5 drop-shadow-xl">
              <h2>RMG, Apparel Sourcing Around the World</h2>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
