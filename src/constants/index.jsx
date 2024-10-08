import dish1 from "/casa1.png";
import dish2 from "/water1.png";
import dish3 from "/coral1.png";

import dish4 from "/haven1.png";
import dish5 from "/magic3.png";
import dish6 from "/lotus1.png";


import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";


import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Homes", targetId: "dishes" },
  { text: "Review", targetId: "review" },
]

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Jason Root, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Allen",
    description: "Helping your wildest needs",
    image: person1,
    link: "https://Instagram.com",
  },
  {
    name: "Josh",
    description: "Manager of developing Homes",
    image: person2,
    link: "https://Instagram.com",
  },
  {
    name: "Zach",
    description: "Assistant director of the show rooms",
    image: person3,
    link: "https://Instagram.com",
  },
  {
    name: "Peter",
    description:
      "CEO of Shoreline Homes 2002-2024",
    image: person4,
    link: "https://Instagram.com",
  },
  {
    name: "Miles",
    description: "Assistant director of In Construction Homes",
    image: person5,
    link: "https://Instagram.com",
  },
  {
    name: "Anthony",
    description: "Deputy CEO of Shoreline Homes 2022-2044",
    image: person6,
    link: "https://Instagram.com",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "jason@example.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`,
};


export const LINKS_SINGLE_MAIN = [
  { text: "Homes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Review", targetId: "review" },
]

export const LINKS_SINGLE = [
  { text: "Home", targetId: "/" },
 
];

export const PAYMENT_SUCCESS = [ "/success/"]
export const PAYMENT_DECLINE = [ "/decline/"]

export const DISHES = [
  {
    image: dish1,
    title: "Casa Mexicali",
    description: "Spectacular 3 bedroom home with a pool and a view of the ocean",
    forward: "/Casa_Mexicali/",
  },
  {
    image: dish2,
    title: "Coobowie Waters",
    description: "A luxry beachfront property on the edge of Gold Coast",
    forward: "/Coobowie_Waters/",
  },
  {
    image: dish3,
    title: "Coral Sands",
    description: "A new house that show cases the coral vibes of carins",
    forward: "/Coral_Sands/",
  },
  {
    image: dish4,
    title: "Haven On Holland",
    description: "A 2025 comming soon exclusive property developed by the best international team",
    forward: "/Haven_On_Holland/",
  },
  {
    image: dish5,
    title: "Magic River Magic",
    description: "A modern home on the edge of the Brisbane River",
    forward: "/Main_River_Magic/",
  },
  {
    image: dish6,
    title: "Noosa Waters",
    description: "An exclusive home on the front of Sunshine Coast Noosa Beach",
    forward: "/The_Lotus/",
  },
  
];

export const ABOUT = {
  header: "We love making dreams come true!",
  content:
    "At Shorline, we believe in making dreams come true no matter how big or small. Wether you need a home for you older one or a home for a large family, we have several luxry homes avaiable for you. We can help you with what ever needs you have. Any questions? Let us know!",
};

export const MISSION =
  "At Shorline, our mission is to provide the best customer experience to our clients";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Chris Hemsworth",
  profession: "Exclusive Billonare",
  content:
    "“I had a fantastic experience with Shorline. Their team is professional, knowledgeable, and dedicated to making the home buying process smooth. They took the time to understand my needs and provided clear, transparent advice throughout. Their customer service is exceptional—always available and incredibly helpful. Plus, their online tools made the process even easier. I highly recommend Shorline for anyone looking to buy or sell a home. Thanks to them, I found my dream home effortlessly!.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 1432 Great Ocean Drive, Australia" },
  { key: "phone", value: "Phone: 1432-386-2986" },
  { key: "email", value: "Email: info@shorlinehomes.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
