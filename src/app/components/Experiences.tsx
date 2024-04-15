import React from "react";
import Section from "./design/Section";
import Heading from "./design/Heading";
import { experiences } from "../constants";
import TagLine from "./design/Tagline";
import Image from "next/image";
import { check, loading, grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Experiences = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container md:pb-4">
        <Heading tag=" What I have done so far" title="Work Experience." />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {experiences.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <Image
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-[27rem] mb-8 md:mb-20 ">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <Image
                          className="mr-2.5"
                          src={item.status === "done" ? check : loading}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 flex justify-center items-center w-full h-full">
                      <Image
                        className="w-[10%] h-[15%] object-contain rounded-full"
                        src={item.imageUrl}
                        width={70}
                        height={50}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h5 mb-4">{item.title}</h4>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                      {item.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-white-100 text-[14px] pl-1 tracking-wider "
                        >
                          {point}
                        </li>
                      ))} 
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
