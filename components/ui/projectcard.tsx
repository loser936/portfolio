"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { CalendarDays, GitBranch, Construction } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const statusColor =
    project.projectStatus.toLowerCase() === "completed"
      ? "bg-blue-600 text-white"
      : project.projectStatus.toLowerCase() === "in progress"
      ? "bg-yellow-400 text-black"
      : "bg-gray-400 text-white";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md 
        hover:shadow-xl transition-all duration-300 ease-in-out 
        hover:scale-[1.02] flex flex-col h-full group cursor-pointer"
    >
      <div className="relative w-full h-56 sm:h-60">
        <Image
          src={project.imageUrl || "/images/placeholder-project.png"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-800">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap text-xs text-gray-500 mb-3 gap-x-4 gap-y-1">
          <div className="flex items-center">
            <CalendarDays size={14} className="mr-1.5 text-blue-500" />
            <span>Start: {formatDate(new Date(project.projectStartDate))}</span>
          </div>
          <div className="flex items-center">
            {project.projectStatus.toLowerCase() === "in progress" ? (
              <Construction size={14} className="mr-1.5 text-yellow-500" />
            ) : (
              <GitBranch size={14} className="mr-1.5 text-blue-600" />
            )}
            Status:
            <span className={`ml-1 px-1.5 py-0.5 rounded-sm text-xs ${statusColor}`}>
              {project.projectStatus}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
