"use client";

import React from "react";
import Section from "../components/design/Section";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import maryamAx from "../assets/maryam.jpg";
import Image from "next/image";

const Aboutme = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <Section className="relative z-0">
      <motion.section
        style={{ opacity }}
        ref={targetRef}
        className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
      >
        <div
          className={`w-full xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
        >
          <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center ">
            <Image src={maryamAx} alt="ax" className="ax-design" />
          </motion.div>
        </div>
      </motion.section>
    </Section>
  );
};

export default Aboutme;
