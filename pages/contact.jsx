import React from "react";
import Head from "next/head";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  //
  const email = "gourgesourcingarif@gmail.com";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="canonical" href="/contact" />
        <meta name="description" content="gourgesourcing contact page" />
      </Head>
      <div className="dark:bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="max-w-[1240px] m-auto md:pl-5 p-4 py-16 glassmorphism">
          <h1 className="py-8 text-4xl font-bold text-center text-yellow-600">
            Get in Touch
          </h1>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl ease-in duration-300"
                    src={ContactImg}
                    alt="contact"
                  />
                </div>

                <div className="text-center md:text-start">
                  <h2 className="py-2 text-3xl text-yellow-600">
                    Gourge Sourcing
                  </h2>
                </div>

                <div className="flex items-center justify-center gap-4 max-w-[350px] m-auto py-4">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-600 ease-in duration-300"
                    onClick={handleEmail}
                  >
                    <a
                      href={`mailto:${email}`}
                      rel="noreferrer"
                      target="_blank"
                      aria-label="email"
                    >
                      <MdEmail size={20} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-600 ease-in duration-300">
                    <a
                      href=""
                      rel="noreferrer"
                      target="_blank"
                      aria-label="skype"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-600 ease-in duration-300">
                    <a
                      href=""
                      rel="noreferrer"
                      target="_blank"
                      aria-label="skype"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-600 ease-in duration-300">
                    <a
                      href=""
                      rel="noreferrer"
                      target="_blank"
                      aria-label="skype"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form action="" method="POST" encType="multipart/form-data">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      placeholder="you@somewhere.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      rows="10"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="message"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-600 text-gray-100 mt-4 w-full p-4 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
