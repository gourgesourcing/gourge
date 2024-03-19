import React from "react";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div className="text-yellow-600 bg-black/70 dark:bg-gray-700">
      <div className="mt-4 md:w-[1240px] mx-auto flex flex-col justify-center py-6 sm:flex-row">
        <p className="text-center md:text-center cursor-default">
          &copy;2020 - {date}{" "}
          <a href="https://gourgesourcing.com">Gourgesourcing</a> . All right
          reserved.| Developed by{" "}
          <a href="https://mushfiq.xyz" target="_blank" rel="noreferrer">
            MUSHFIQ
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
