"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-white text-gray-800 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative min-h-screen p-6 pt-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full shadow-md"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Project Title & Info */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-6">{project.shortDescription}</p>

            {/* Project Image */}
            <div className="w-full aspect-video relative rounded-lg overflow-hidden border border-gray-300 mb-6">
              <Image
                src={project.imageUrl || "/images/placeholder-project.png"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Description
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 transition"
                  >
                    View Code
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
