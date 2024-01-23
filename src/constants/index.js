import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  logoartin2,
  logoartin3,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  digikala,
  sahand,
  galamchi,
  nextjs1,
  adobexd,
  python,
  sass,
  onlinemenu,
  ecommerce,
  recipefinder,
  personalvlog,
  firstportfolio,
  piggame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download Resume",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Next JS",
    icon: nextjs1,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: adobexd,
  },
];

const experiences = [
  {
    title: "Junior web developer",
    company_name: "Self employed",
    icon: logoartin3,
    iconBg: "#383E56",
    date: "Sep 2022-present  Bielefeld, Germany",
    points: [
     "E-commerce Website: HTML5, CSS3, JS, React, Tailwind, Next.js, Stapi, Stripe – (My online shop)",
      "Portfolio website: HTML5, CSS3, react, three.js, tailwind, next.js – (My new 3D portfolio)",
      "Recipe Finder App: HTML5, CSS3, JS, SASS – (This website brings all the recipes you might need in one place)",
      "Pig Game: HTML5, CSS3 – (This mini web page offers a fun game that you can play with your friend)",
      "Bank App, Bankist App, and more that you can see in my portfolio."
  
    ],
  },
  {
    title: "UI design Internship",
    company_name: "Digikala",
    icon: digikala,
    iconBg: "#E6DEDD",
    date: "Jun 2020-Sep 2020  Tehran, Iran",
    points: [
      "skills: Figma, Adobe XD, UI, UX - Basic UI designs for phone applications",
    ],
  },
  {
    title: "Internship for bachelor’s degree",
    company_name: "Sahand Keivan Company",
    icon: sahand,
    iconBg: "#E6DEDD",
    date: "June 2019-Oct 2019 Tabriz, Iran",
    points: [
      "skills: C, C++ - Developing boards for UPS machines and analyzing machine behavior, simulating machine operation",
    ],
  },
  {
    title: "Student Consultant",
    company_name: "Meta",
    icon: galamchi,
    iconBg: "#E6DEDD",
    date: "Mar 2018-Dec 2018 Tehran, Iran",
    points: ["skills: Communication, Teamwork, Presentation"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce (my online shop)",
    description:
      "I've crafted an online store utilizing React on the client side, Strapi as the content management system (CMS), and Stripe to manage the payment section.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "text-amber-400",
      },
      {
        name: "HTML5,CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://artinland.vercel.app/",
  },
  {
    name: "Fancy Restuarant",
    description:
      "An online restaurant menu enables users to browse food options, select items, add them to their cart, and proceed to checkout for payment completion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html,Css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: onlinemenu,
    source_code_link: "https://github.com/ArtinMohsenpour",
  },
  {
    name: "Recipe Finder",
    description:
      "Users have the ability to search for their preferred dishes and obtain corresponding recipes. Additionally, they can customize the serving size based on the number of people they intend to serve.   ",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Html,Css",
        color: "pink-text-gradient",
      },
    ],
    image: recipefinder,
    source_code_link: "https://recipefinder-artin.netlify.app/",
  },
  {
    name: "My first Portfolio",
    description:
      "My first Portfolio website: Through this platform, I invite you to witness the evolution of my skills, from the initial concepts to the polished final products.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Html,Css",
        color: "pink-text-gradient",
      },
    ],
    image: firstportfolio,
    source_code_link: "https://artinde.w3spaces.com/",
  },
  {
    name: "Simple Blog",
    description: "A simple blog for sharing daily news.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css Modules",
        color: "pink-text-gradient",
      },
    ],
    image: personalvlog,
    source_code_link: "https://artinde2.w3spaces.com/",
  },
  {
    name: "Dice Game",
    description:
      " A fundamental game designed to enhance my algorithmic writing capabilities and seamlessly integrate them into web applications.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css Modules",
        color: "pink-text-gradient",
      },
    ],
    image: piggame,
    source_code_link: "https://artinde3.w3spaces.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
