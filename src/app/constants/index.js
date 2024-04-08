import benefitIcon1 from "../assets/benefits/icon-1.svg";
import benefitIcon2 from "../assets/benefits/icon-2.svg";
import benefitIcon3 from "../assets/benefits/icon-3.svg";
import benefitIcon4 from "../assets/benefits/icon-4.svg";
import benefitImage2 from "../assets/benefits/image-2.png";

import beneftiCard1 from "../assets/benefits/card-1.svg";
import beneftiCard2 from "../assets/benefits/card-2.svg";
import beneftiCard3 from "../assets/benefits/card-3.svg";
import beneftiCard4 from "../assets/benefits/card-4.svg";
import beneftiCard5 from "../assets/benefits/card-5.svg";
import beneftiCard6 from "../assets/benefits/card-6.svg";





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
      title: "Aboutme",
      url: "/aboutme",
    },

  ];





  export const projects = [
    {
      id:1,
      name: "Amlak Eeno",
      description:
        "Web-based platform designed for users to effortlessly search home rentals and purchases in Tehran, offering a convenient and efficient solution for housing needs.",
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
      id:2,
      name: "Tee Trends",
      description:
        "Web application exclusively for buying T-shirts for both women and men – explore, choose, and purchase your favorite styles easily!",
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
      id:3,
      name: "Eshop",
      description:
        "An all-in-one online shopping platform catering to your every need in life, from TVs and clothes to phones and more. Discover, shop, and order everything effortlessly!",
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

  


export const benefits=  [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl:"./card-1.svg",
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
    backgroundUrl:"./card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

  