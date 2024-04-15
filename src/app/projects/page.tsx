import React from "react";
import Section from "../components/design/Section";
import Heading from "../components/design/Heading";
import { projects } from "../constants";
import { GradientLight } from "../components/design/Benefits";
import Arrow from "../assets/svg/Arrow";

import Image from "next/image";
import ClipPath from "../assets/svg/ClipPath";
import Link from "next/link";
import { Gradient } from "../components/design/Roadmap";


type Tag = {
  name: string;
  color: string;
};

type Project = {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  source_code_link: string;
  backgroundUrl: string;
  imageUrl: string;
  light: boolean;
};

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  backgroundUrl,
  imageUrl,
  light,
}) => {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
      key={index}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto">
        <h5 className="h5 mb-5">{name}</h5>
        <p className="body-2 mb-6 text-n-3">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px]   ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center mt-auto">
          <Link
            className=" cursor-pointer ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </Link>
          <Arrow />
        </div>
      </div>
      {light && <GradientLight />}
      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={380}
              height={362}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <ClipPath />
    </div>
  );
};




const Projects : React.FC = () => {
  return (
    <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="container relative z-2">
        <Gradient />
        <Heading
          className="md:max-w-md lg:max-w-2xl mt-10"
          title="Projects."
          text="
        Following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
