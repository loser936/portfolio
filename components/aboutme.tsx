"use client";

import Image from "next/legacy/image";
import { motion, circOut } from "framer-motion";
import { GlassmorphicCard } from "./ui/GlassmorphicCard";
import Link from "next/link";

import { Images } from "@/lib/images";

export function AboutMe() {
  const profileImageUrl = Images.ProfilePlaceholder;

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: circOut, delay: 0.3 },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 lg:gap-5 items-center  bg-white">
      {/* Image Card */}
      <motion.div
        className="relative"
        variants={imageContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
       
        <div className="relative aspect-[3/4] sm:aspect-square md:aspect-[4/5] rounded-xl overflow-hidden ...">

          <Image
            src={profileImageUrl}
            alt="Duong Hoang Lan Anh - Frontend Developer"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                Available for work
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="bg-gradient-to-br from-gray-200 to-silver-300 shadow-md rounded-xl p-4 sm:p-6">
            <p className="text-lg text-gray-800 leading-relaxed">
            Hello! I&apos;m{" "}
            <strong className="text-blue-700">Oubeid Allah Jaballah</strong>, a
            graduated Computer Engineer with a double degree from Grenoble INP - Esisar
            (France) and the National Engineering School of Sousse (Tunisia). My academic
            background is rooted in AI, and I’m passionate about solving real-world
            challenges using intelligent systems.
            </p>
            <p className="text-lg text-gray-800 mt-4 leading-relaxed">
            I have hands-on experience in industrial AI, including predictive maintenance
            for printers at{" "}
            <strong className="font-semibold text-black">Markem-Imaje</strong>, and 
            virtual twin generation from 🛰️ satellite imagery during my final-year internship
            at{" "}
            <strong className="font-semibold text-black">Dassault Systèmes</strong>. My work 
            spans computer vision, geospatial data , and machine learning using tools like 
            PyTorch, TensorFlow, and LangChain.
            </p>
            <p className="text-lg text-gray-800 mt-4 leading-relaxed">
            I&apos;m currently seeking new opportunities where I can continue to grow, face
            exciting challenges, and make a meaningful impact. I’m self-motivated, curious,
            and eager to bring value to innovative teams in AI or Data Science.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-2 pt-2 border-t border-gray-400">
            <div>
                <div className="text-xs sm:text-sm text-gray-500">🙍‍♂️ Name</div>
                <div className="font-medium text-black">Oubeid Allah Jaballah</div>
            </div>
            <div>
                <div className="text-xs sm:text-sm text-gray-500">✉️ Email</div>
                <Link
                href="mailto:oubeidallahjaballah@gmail.com"
                className="font-medium text-blue-600 hover:underline"
                >
                oubeidallahjaballah@gmail.com
                </Link>
            </div>
            <div>
                <div className="text-xs sm:text-sm text-gray-500">📍 Location</div>
                <div className="font-medium text-black">Rennes, France</div>
            </div>
            <div>
                <div className="text-xs sm:text-sm text-gray-500">🚀 Availability</div>
                <div className="font-medium text-green-600">
                Open to new opportunities
                </div>
            </div>
            </div>
        </div>
        </div>
        
        
      
    </div>
  );
}
