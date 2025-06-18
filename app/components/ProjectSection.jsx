"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Personal Website (This Website!)",
    description: "A website for introducing myself!",
    image: "/images/projects/personal_website.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "An IPFS-Blockchain-based Decentralized Federated Learning System for E-Commerce",
    description: "Team project for HKUST COMP4651 Cloud Computing and Big Data System.",
    image: "/images/projects/comp4651.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/COMP4651-24fall/project-group-15",
    previewUrl: "https://github.com/COMP4651-24fall/project-group-15/blob/main/COMP4651-F24-G15-Project-Report.pdf",
  },
  {
    id: 3,
    title: "Employing Word Embeddings and Machine Learning For Effective Fake News Detection",
    description: "Team project for HKUST COMP4211 Machine Learning.",
    image: "/images/projects/comp4211.png",
    tag: ["All", "NLP"],
    gitUrl: "https://github.com/Larry1280326/COMP4211-Project/blob/main/code.ipynb",
    previewUrl: "https://github.com/Larry1280326/COMP4211-Project/blob/main/report.pdf",
  },
  {
    id: 4,
    title: "Tetris with C++",
    description: "A tetris game made with C/ C++.",
    image: "/images/projects/tetris.png",
    tag: ["All", "Miscellaneous"],
    gitUrl: "https://github.com/Larry1280326/tetris-with-c-plus-plus",
    previewUrl: "https://github.com/Larry1280326/tetris-with-c-plus-plus",
  },
    {
    id: 5,
    title: "LaTeX Notes for HKUST courses",
    description: "The comprehensive Notes written in LaTeX for courses that I have taken at HKUST.",
    image: "/images/projects/LaTeX.png",
    tag: ["All", "Miscellaneous"],
    gitUrl: "https://github.com/Larry1280326/my-latex-notes",
    previewUrl: "https://github.com/Larry1280326/my-latex-notes/blob/main/readme.md",
  },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NLP"
          isSelected={tag === "NLP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Miscellaneous"
          isSelected={tag === "Miscellaneous"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;