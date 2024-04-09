"use client";
import React from "react";
import Section from "./design/Section";
import Heading from "./design/Heading";
import { collabApps } from "../constants";
import Image from "next/image";
import { LeftCurve, RightCurve } from "../components/design/Colaboration";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import clsx from "clsx";
import brain from "../assets/brainwave-symbol.svg";

const Introduction = () => {
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
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <Heading
            className="mb-4 md:mb-8"
            title="Overview."
            text="
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Django, DRF, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!"
          />
        </div>

        <div
          className="mt-20 flex flex-col items-center md:flex-row"
          ref={container}
        >
          {sortedCollabApps.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(sortedCollabApps.length / 2) && (
                <>
                  <Image src={brain} width={48} height={48} alt="brainwave" />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="mx-2 pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                <Image
                  className="m-auto "
                  width={item.width}
                  height={item.height}
                  alt={item.title}
                  src={item.icon}
                />
              </div>
              {index !== sortedCollabApps.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(sortedCollabApps.length / 2)
                      ? "rotate-180"
                      : "rotate-0"
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Introduction;










     {/* <div ref={container} className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-1 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Skills:
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-4 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-4 rounded-full signal-line rotate-180 bg-gradient-to-t">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-[var(--color-secondary)]  rounded-full">
                <div className="signal-line rotate-180 bg-gradient-to-t flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <Image
                    src={brain}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-3 border border-[var(--color-secondary)] rounded-full -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      className="m-auto "
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
          <RightCurve /> 
          </div>
        </div> */}