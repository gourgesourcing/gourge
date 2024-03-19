import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { slides } from "../data/data";
import Image from "next/image";

const Images = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const mappedSlides = slides.map((slide) => ({
    src: slide.src,
    alt: slide.title, // You can use the title as alt text
    width: 1740, // Set your preferred width
    height: 1080, // Set your preferred height
  }));

  return (
    <>
      <div className="w-full h-full py-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="mt-[5%] text-yellow-600 font-bold text-2xl text-center">
            <h2>Products Images</h2>
          </div>
          {/* Grid image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-[5%] p-4">
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide.src}
                alt={slide.title}
                width={400}
                height={400}
                className="cursor-pointer object-cover w-full h-40 md:h-56 lg:h-64 xl:h-80 rounded-lg border-2 border-yellow-500"
                onClick={() => {
                  setSelectedImageIndex(index);
                  setOpen(true);
                }}
              />
            ))}
          </div>

          {/* LightBox */}
          <Lightbox
            plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "end",
            }}
            open={open}
            close={() => setOpen(false)}
            slides={mappedSlides}
            currentIndex={selectedImageIndex}
          />
        </div>
      </div>
    </>
  );
};

export default Images;
