"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      <span className="font-size: 1.2em;">Innovative Software Developer</span> with expertise in Python, JavaScript, MERN Stack, Next.js, and NestJS. 
      <span className="font-size: 1em;">Experienced in building real-time chat applications, AI-powered chatbots, cryptocurrency dashboards, and secure authentication systems.</span> 
      <span className="font-size: 1em;">Skilled in developing responsive web applications, integrating RESTful APIs, and optimizing backend performance using MongoDB, PostgreSQL, and Django REST Framework.</span> 
      <span className="font-size: 1em;">Passionate about cutting-edge technologies, scalable architecture, and seamless user experiences, with a strong focus on efficiency, security, and real-time data interactions.</span>
      </p>
    </motion.section>
  );
}
