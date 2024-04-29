import benefitIcon1 from "../assets/benefits/icon-1.svg";
import benefitIcon2 from "../assets/benefits/icon-2.svg";
import benefitIcon3 from "../assets/benefits/icon-3.svg";
import benefitIcon4 from "../assets/benefits/icon-4.svg";
import benefitImage2 from "../assets/benefits/image-2.png";

import react from "../assets/appicons/react.svg";
import next from "../assets/appicons/nextjs.svg";
import github from "../assets/appicons/github.svg";
import npm from "../assets/appicons/npm.svg";
import python from "../assets/appicons/python.svg";
import node from "../assets/appicons/node-dot-js.svg";


import amlak from "../assets/company/amlak.png";
import deakin from "../assets/company/deakin.png";
import himalia from "../assets/company/himalia.png"




export const navigation = [
  {
    id: "0",
    title: "Blogs",
    url: "/posts",
   
  },
  {
    id: "1",
    title: "Projects",
    url: "/projects",
  },
  {
    id: "2",
    title: "Home",
    url: "/",
  },

];





export const projects = [
  {
    // id: 1,
    name: "Amlak Eeno",
    description:
      "Web-based platform designed for users to effortlessly search home rentals and purchases in Tehran, offering a convenient and efficient solution for housing needs.",
    backgroundUrl: "./card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
      {
        name: "postGIS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/maryamHabibpourr/AmlakEenoClient-React-LeafLet/tree/main/src",
  },
  {
    // id: 2,
    name: "Tee Trends",
    description:
      "Web application exclusively for buying T-shirts for both women and men – explore, choose, and purchase your favorite styles easily!",
    backgroundUrl: "./card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    light: true,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/maryamHabibpourr/TeetrendsClient-React-Redux/tree/main/src",
  },
  {
    // id: 3,
    name: "Eshop",
    description:
      "An all-in-one online shopping platform catering to your every need in life, from TVs and clothes to phones and more. Discover, shop, and order everything effortlessly!",
    backgroundUrl: "./card-3.svg",
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/maryamHabibpourr/Eshop-Firebase-React-Redux/tree/main/src",
  },
];






export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];





export const collabApps = [
  {
    id: "0",
    title: "Raect",
    icon: react,
    width: 40,
    height: 40,
  },
  {
    id: "1",
    title: "Python",
    icon: python,
    width: 40,
    height: 40,
  },
  {
    id: "2",
    title: "npm",
    icon: npm,
    width: 40,
    height: 40,
  },
  {
    id: "3",
    title: "node",
    icon: node,
    width: 40,
    height: 40,
  },
  {
    id: "4",
    title: "github",
    icon: github,
    width: 40,
    height: 40,
  },
  {
    id: "5",
    title: "next",
    icon: next,
    width: 40,
    height: 40,
  },
];



export const experiences = [
  {
    id: "0",
    title: "React.js Developer",
    company_name: "AmlakEno",
    status: "progress",
    imageUrl: amlak,
    iconBg: "#fff",
    date: "Apr 2022 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams, including backend developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    colorful: true,
  },
  {
    id: "1",
    title: "AI Researcher and Content Strategist",
    company_name: "Collaboration with Deakin University, Australia",
    status: "done",
    imageUrl: deakin,
    iconBg: "#E6DEDD",
    date: "Des 2019 - Mar 2022",
    points: [
      "Creating and curating high-quality AI content, including research papers, articles, and documentation.",
      "Designing and developing AI algorithms and models to address specific challenges or enhance existing systems.",
      "Implementing and experimenting with state-of-the-art machine learning techniques to solve complex problems.",
    ],
  },
  {
    id: "2",
    title: "Software support",
    company_name: "Himalia",
    status: "done",
    imageUrl: himalia,
    iconBg: "#fff",
    date: "July 2017 - Dec 2019",
    points: [
      "Providing timely and effective technical support to end-users, resolving software-related issues, and ensuring a positive user experience",
      "Troubleshooting software problems, identifying root causes, and implementing solutions to prevent recurrence.",
      "Collaborating with internal teams, including developers and QA, to communicate user feedback, report bugs, and contribute to the continuous improvement of software products.",
    ],
  },

];









