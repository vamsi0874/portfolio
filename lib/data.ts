import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptoImg from "@/public/crypto.png";
import chatImg from "@/public/chat.png";
import cgptImg from "@/public/cgpt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "NIT, Kurukshetra",
    description:
     "I graduated with a Bachelor's degree in EE from NIT Kurukshetra with a 8.8 CGPA.",
     icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "SDE 1 Intern",
    location: "IRCTC",
    description:
      "Contributed to the development of a web application for the Railway Protection Force, enhancing operational efficiency through secure data management and intuitive user interfaces. My work focused on building responsive front-end features, ensuring the platform was accessible and user-friendly for diverse users.",

    icon: React.createElement(CgWorkAlt),
    date: "Jan - June 2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone",
    description:
      "I developed a ChatGPT clone featuring an interactive chat interface with dynamic image upload functionality for an enhanced user experience. The backend, built with NestJS, efficiently handles chat processing and user interactions. MongoDB was integrated for scalable storage and management of chat conversations and user-generated content. To streamline image processing and embedding within chat responses, I utilized ImageKit.io. Secure user authentication was implemented using JSON Web Tokens (JWT), ensuring robust access control. Additionally, I optimized data fetching and real-time interactions using React Query, enabling seamless and efficient updates for the chat.",
    tags: ["React", "MongoDB", "Tailwind", "NestJS"],
    imageUrl: cgptImg,
    Url: "https://gpt-front-two.vercel.app",
  },
  {
    title: "Crypto",
    description:
      "I built a dynamic frontend using Next.js and TypeScript, ensuring robust type-checking and an improved developer experience. The backend, powered by Django REST Framework, provides a secure and scalable RESTful API for handling authentication, data storage, and business logic. TanStack Query was utilized for efficient data fetching, caching, and real-time updates, enhancing performance and responsiveness. Additionally, the platform features interactive cryptocurrency graph visualizations and a user-enabled watchlist, offering an engaging and data-driven experience.",
    tags: ["React","Next.js", "TypeScript" ,"Tailwind", "Django", "sqlite3"],
    imageUrl: cryptoImg,
    Url: "https://crypto-rouge-three.vercel.app",
  },
  {
    title: "Chat app",
    description:
      "I developed a real-time chat application utilizing Socket.io to enable instant messaging with seamless user interactions. The application features a responsive and dynamic user interface built with React.js, ensuring a smooth user experience across devices. For secure authentication and authorization, I implemented JWT authentication, safeguarding user sessions. Additionally, I integrated MongoDB to efficiently store and manage chat messages and user data, ensuring scalability and reliability.",
    tags: ["React", "Tailwind", "Socket.io","express","Mongodb"],
    imageUrl: chatImg,
    Url: "https://chatapp-x5od.onrender.com",
  },
] as const;

export const skillsData = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nestjs",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "AWS",
  "Docker",
  "OOPS",
  "DSA",
] as const;
