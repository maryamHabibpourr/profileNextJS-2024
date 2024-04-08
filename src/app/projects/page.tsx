import React from "react";
import Section from "../components/design/Section";
import Heading from "../components/design/Heading";
import { benefits } from "../constants";
import { GradientLight } from "../components/design/Benefits";
import Arrow from "../assets/svg/Arrow";

import Image from "next/image";
import ClipPath from "../assets/svg/ClipPath";


type Benefit ={
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: string;
  light: boolean;
}


const Projects: React.FC<Benefit> = ({
  id,
  title,
  text,
  backgroundUrl,
  iconUrl,
  imageUrl,
  light,
}) => {
  return (
    <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl mt-10" title="Projects." 
        text="
        Following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively." />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
