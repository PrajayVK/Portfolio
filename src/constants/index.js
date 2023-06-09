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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Deep Learning Enthusiast",
      icon: backend,
    },
    {
      title: "App Development(Working)",
      icon: creator,
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
      name: "C Programming",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python Programming",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Trainee",
      company_name: "PearlArc Systems",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jun 2022 - July 2022",
      points: [
        "This was a training experience I did not work on any projects.",
        "Since it only for a duration of 1 month, I learnt C# programming.",
        "Got a basic idea of the DOTnet framework.",
        "Developed a few C# projects.",
      ],
    },
    {
      title: "Assistant Teacher",
      company_name: "Keshav's Tuition(My Dad)",
      icon: null,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "I do this just to help my dad with his tutorials.",
        "Taught 10th graders Maths Science and Computer Science.",
        "This is not related to any of my coursework.",
        
      ],
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
      name: "BloxorzJS",
      description:
        "This is a website that allows you to play a game called Bloxorz. Bloxorz is a game where you manipulate a cuboidal block (1x2x1 dimensions) through a set of platforms and navigate to the exit without falling off the edge. It has a leaderboard to keep track of the scores of every user.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/PrajayVK/bloxorzjs",
    },
    {
      name: "Emotion Detection",
      description:
        "The aim of the project is to analyze the user's voice and determine their mood which can then be used for various purposes.Companies can provide a more personalised experience by recommending products based on the person's mood. One such example being in voice assistants. When the user asks it to play a song for example, it can play a song based on the user's mood.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Audio",
          color: "green-text-gradient",
        },
        {
          name: "Keras Module",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/PrajayVK/Emotion-Detector-Using-Voice-as-an-Input",
    },
    {
      name: "Multi Lingual Compiler",
      description:
        "The aim of this project is to teach coding to students who do not know english. The user asks a query and can visualise how the code runs with a AST.This uses OpenAI's API in order to answer the user's queries",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI Api",
          color: "green-text-gradient",
        },
        {
          name: "GraphViz",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/PrajayVK/Multilingual-Meta-language-and-IDE",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };