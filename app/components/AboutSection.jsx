"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>C/ C++</li>
        <li>Java</li>
        <li>R</li>
        <li>LaTeX</li>
        <li>Git/ GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>HKUST (2022 - )</li>
        <li>CCCMYC (2016 - 2022)</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Action movies! I'm a big fan of John Wick!</li>
        <li>Video games! I like playing  LoL!</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Dean's List (2022-23 Fall, 2022-23 Spring, 2023-24 Fall, 2024-25 Spring)</li>
         <li>Mr. Keung Leung Chung Scholarship (2024-25)</li>
        <li>Aeon Credit Service (Asia) Scholarship (2023-24)</li>
        <li>HKUST Admission Scholarship (2022-23)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hkust_sundial.png" alt="cute_hkust_sundial" width={200} height={200} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a <a href="https://hkust.edu.hk">HKUST</a> student majoring in <a href="https://dsct.hkust.edu.hk/">Data Science and Technology</a> with extended major in <a href="https://emia.hkust.edu.hk/extended-major-artificial-intelligence-majorai">AI</a> with minor in <a href="https://www.math.hkust.edu.hk/ug/minor_actuarial.php">actuarial mathematics</a>. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "Hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "Awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;