"use client";
import React from "react";
import Section from "./design/Section";
import Heading from "./design/Heading";
import { collabApps } from "../constants";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import clsx from "clsx";
import brain from "../assets/brainwave-symbol.svg";
import { Gradient } from "./design/Roadmap";




const Overview = () => {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP);
  
    useGSAP(
      () => {
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "power2.inOut" },
        });
  
        tl.to(".pulsing-logo", {
          keyframes: [
            {
              filter: "brightness(2)",
              opacity: 1,
              duration: 0.4,
              ease: "power2.in",
            },
            {
              filter: "brightness(1)",
              opacity: 0.7,
              duration: 0.9,
            },
          ],
        });
  
        tl.to(
          ".signal-line",
          {
            keyframes: [
              { backgroundPosition: "0% 0%" },
              {
                backgroundPosition: "100% 100%",
                stagger: { from: "center", each: 0.3 },
                duration: 1,
              },
            ],
          },
          "-=1.4"
        );
  
        tl.to(
          ".pulsing-icon",
          {
            keyframes: [
              {
                opacity: 1,
                stagger: {
                  from: "center",
                  each: 0.3,
                },
                duration: 1,
              },
              {
                opacity: 0.4,
                duration: 1,
                stagger: {
                  from: "center",
                  each: 0.3,
                },
              },
            ],
          },
          "-=2"
        );
      },
      { scope: container }
    );
  
  
    const sortedCollabApps = collabApps.slice().sort((a, b) => {
      return Object.keys(a).length - Object.keys(b).length;
    });
  
  
  return (
    <Section crosses>
      <div className="container flex flex-col items-center ">
      <Gradient />
        <Heading
          className="mb-4 md:mb-8"
          tag="Introduction"
          title="Overview."
          text="
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like Next, React, Django, DRF.
         I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!"
        />
        <div
          className="mt-2 flex flex-col items-center md:flex-row"
          ref={container}
        >
          {sortedCollabApps.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(sortedCollabApps.length / 2) && (
                <>
                  <Image src={brain} width={60} height={60} alt="brainwave" />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="mx-2 my-2 pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                <Image
                  className="m-auto "
                  width={item.width}
                  height={item.height}
                  alt={item.title}
                  src={item.icon}
                />
              </div>
              {/* {index !== sortedCollabApps.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(sortedCollabApps.length / 2)
                      ? "rotate-180"
                      : "rotate-0"
                  )}
                />
              )} */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Overview;
