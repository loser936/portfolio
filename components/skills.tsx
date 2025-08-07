"use client";

import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAmazon,
  FaAws,
} from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import {
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiAnaconda,
  SiLangchain,
  SiMysql,
  SiCloudcannon,
  SiGdal,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
const skillCategories = [
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      { name: "C++", icon: <FaGitAlt className="h-8 w-8 text-[#00599C]" /> },
      { name: "Java", icon: <FaJava className="h-8 w-8 text-[#f89820]" /> },
      { name: "SQL", icon: <SiMysql className="h-8 w-8 text-[#00758F]" /> },
      { name: "MySQL", icon: <SiMysql className="h-8 w-8 text-[#00618A]" /> },
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" /> },
      { name: "GDAL", icon: <SiGdal className="h-8 w-8 text-[#F7DF1E]" /> },
      { name: "Azure", icon: <SiCloudcannon className="h-8 w-8 text-[#0078D4]" /> },
      { name: "AWS", icon: <FaAws className="h-8 w-8 text-[#FF9900]" /> },
      { name: "Docker", icon: <FaDocker className="h-8 w-8 text-sky-400" /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "PyTorch", icon: <SiPytorch className="h-8 w-8 text-[#EE4C2C]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="h-8 w-8 text-[#FF6F00]" /> },
      { name: "Keras", icon: <SiKeras className="h-8 w-8 text-[#D00000]" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="h-8 w-8 text-[#F7931E]" /> },
      { name: "Pandas", icon: <SiPandas className="h-8 w-8 text-[#150458]" /> },
      { name: "NumPy", icon: <SiNumpy className="h-8 w-8 text-[#013243]" /> },
      { name: "Anaconda", icon: <SiAnaconda className="h-8 w-8 text-[#44A833]" /> },
      { name: "LangChain", icon: <SiLangchain className="h-8 w-8 text-[#F5A623]" /> },
    ],
  },
  {
    title: "Expertise",
    skills: [
      { name: "Machine Learning"},
      { name: "Deep Learning"},
      { name: "LLM" },
      { name: "CNN" },
      { name: "NLP" },
      { name: "Computer Vision" },,
      { name: "Geospatial Data" },
      { name: "Data Labeling" },
      { name: "Web Scraping" },
    ].map((skill) => ({
      ...skill,
      icon: <GiArtificialIntelligence className="h-8 w-8 text-[#FF6F00]"/>,
    })),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  return (
    <div className="py-3 sm:py-6 bg-white relative">
      <div className="container relative z-10 mx-auto px-4">
      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-gradient-to-br from-gray-50 to-blue-50 p-6 shadow-lg"
            >
              <h3 className="mb-6 text-xl font-bold text-gray-800 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-1 text-center"
                  >
                     <div className="h-16 flex items-start justify-center">
    <div className="h-8 w-8">{skill.icon}</div>
  </div>
  <p className="text-sm font-medium text-gray-700 leading-tight">{skill.name}</p>
</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}