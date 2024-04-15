import React from "react";
import Section from "./design/Section";
import { Gradient } from "./design/Roadmap";
import Heading from "./design/Heading";
import Link from "next/link";

const Publications = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container flex flex-col items-center ">
        <Gradient />
        <Heading
          className="mb-4 md:mb-8"
          tag="What I staudid in AI"
          title="Publication."
          text="
              Exceptionally adept professional, proficient in researching,
              coding, and deploying deep learning models. Passionate for
              opportunities in research work that will open the door of career
              progression in AI industry."
        />
        <div className="w-full flex flex-col md:flex-row  items-center justify-center gap-10">
          <Link
            href="https://www.sciencedirect.com/science/article/abs/pii/S0952197623004323"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%] md:w-[30%] underline text-cenetr text-n-3 transition-colors hover:text-color-1"
          >
            Uncertainty-aware credit card fraud detection using deep learning
          </Link>
          <Link
            href="https://arxiv.org/abs/2107.11643"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%] md:w-[30%] underline text-cenetr text-n-3 transition-colors hover:text-color-1"
          >
            An uncertainty-aware deep learning framework for defect detection in
            casting products
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Publications;
