'use client';

import { GithubIcon } from "../assets/svg/github"
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Section from "./design/Section";
import Image from "next/image";
import maryamAx from "../assets/maryam.jpg"

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <Section
    className="pt-[12rem] -mt-[5.32rem]"
    crossesOffset="lg:translate-y-[5.25rem]"
  >
    <motion.section
    style={{ opacity }}
    ref={targetRef}
    className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
  >
    <motion.div
      style={{ position, scale, x: "-50%" }}
      className="fixed left-1/2 z-10 flex flex-col items-center"
    >
      <p className="mb-2 text-xl font-light">
        <span className="font-medium">Projects</span> Beta
      </p>
      <p className="mb-8 text-center text-xs font-light text-text">
        by{" "}
        <a
          href="https://www.codesandbox.com"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          CodeSandbox
        </a>
        ,
        <br />
        rebuilt by{" "}
        <a
          href="https://www.frontend.fyi"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          Frontend.FYI
        </a>
      </p>

      <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
        Development
        <br />
        reimagined.
      </h1>
      <Image src={maryamAx} alt="ax" className="ax-design"/>
      <a href="#" className="flex items-center text-lg text-primary">
        <GithubIcon className="mr-2 inline h-5 w-5" />
        Import GitHub project
      </a>
    </motion.div>
  </motion.section>

  </Section>
  );
};

export default Hero;
