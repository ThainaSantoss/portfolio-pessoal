import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projetos
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 flex flex-wrap lg:justify-center hover:bg-neutral-900 transition-colors duration-200 p-4 rounded"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              {/* <img src={project.image} alt={project.title} /> */}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 1, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
