import React from 'react';
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiDart, SiFlutter, SiTailwindcss, SiTypescript } from 'react-icons/si';
import ProfileImg from './Images/sumit.jpeg';

export const GlobalContext = React.createContext({});

export const projectDetail = {
  profile: {
    name: 'Sumit Kumar',
    avatarUrl: ProfileImg,
    jobTitle: 'Software Engineer',
    aboutMe:
      'I was born in 1976. I live in Bavaria and work in Munich as a Software Developer/Architect. I’ve published more than 20 articles for German programming magazines, mostly about Ruby .',
  },
  contactDetails: {
    github: {
      display: '/dhruvanwd',
      url: 'https://github.com/dhruvanwd',
    },
    linkedIn: {
      display: ' in/72sumit-kumar',
      url: 'https://www.linkedin.com/in/72sumit-kumar/',
    },
    mail: {
      display: 'dev.kumar.sumit@gmail.com',
      url: 'mailto:dev.kumar.sumit@gmail.com',
    },
    mobile: {
      display: ' +91 7007962803',
      url: 'tel:7007962803',
    },
  },

  timeline: [
    {
      year: 1985,
      title: 'Born',
    },
    {
      year: 2003,
      title: 'Graduated High School',
    },
    {
      year: 2004,
      title: `Started at Fox Valley Technical College (FVTC) in an Electrical
      Engineering program`,
    },

    {
      year: 2005,
      title: `Changed at FVTC to Web Design & Development program`,
    },

    {
      year: 2006,
      title: `Web Design Internship`,
      blurp: `started internship at company 1.`,
    },

    {
      year: 2007,
      title: `IT Internship`,
      blurp: `Started internship at company 2`,
    },

    {
      title: 'Got Married',
    },
    {
      title: `Application Engineer`,
      blurp: ` Started web design/dev job at company 2.`,
    },

    {
      year: 2012,
      title: `First Child`,
      blurp: `Spouse and I welcomed our first daughter.`,
    },

    {
      year: 2015,
      title: `Second Child`,
      blurp: ` Spouse and I welcomed our second daughter.`,
    },

    {
      year: 2016,
      title: `Lead Application Engineer`,
      blurp: `Promotion to mid-level role.`,
    },

    {
      year: 2018,
      title: `Aerial/Circus Arts`,
      blurp: `Started taking classes to learn aerial silks, hoop, and hammock.`,
    },
  ],

  projects: [
    {
      name: 'Eventoloop',
      imgUrl: 'https://picsum.photos/seed/picsum/200/200?random=1',
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
      tags: ['#photography', '#travel', '#winter'],
    },

    {
      name: 'Patient portal mobile app',
      imgUrl: 'https://picsum.photos/seed/picsum/200/200?random=2',
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
      tags: ['#photography', '#travel', '#winter'],
    },
    {
      name: 'H20 Job portal',
      imgUrl: 'https://picsum.photos/seed/picsum/200/200?random=4',
      description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
      tags: ['#photography', '#travel', '#winter'],
    },
  ],

  skills: [
    {
      label: 'Languages',
      skills: [
        {
          name: 'HTML',
          proficiency: 75,
          icon: () => <FaHtml5 className="w-full h-8 text-purple-500" />,
        },

        {
          name: 'CSS3',
          proficiency: 80,
          icon: () => <FaCss3Alt className="w-full h-8 text-blue-600" />,
        },

        {
          name: 'Javascript',
          proficiency: 80,
          icon: () => <FaJs className="w-full h-8 text-yellow-400" />,
        },

        {
          name: 'Dart',
          proficiency: 80,
          icon: () => <SiDart className="w-full h-8 text-blue-500" />,
        },

        {
          name: 'Python',
          proficiency: 80,
          icon: () => <FaPython className="w-full h-8 text-blue-500" />,
        },

        {
          name: 'Typescript',
          proficiency: 85,
          icon: () => <SiTypescript className="w-full h-7 text-blue-600" />,
        },
      ],
    },

    {
      label: ' Frameworks & Libraries',
      skills: [
        {
          name: 'NodeJs',
          proficiency: 85,
          icon: () => <FaNodeJs className="w-full h-8 text-green-600" />,
        },

        {
          name: 'ReactJS',
          proficiency: 85,
          icon: () => <FaReact className="w-full h-8 text-purple-600" />,
        },

        {
          name: 'Angular 2+',
          proficiency: 80,
          icon: () => <FaAngular className="w-full h-8 text-red-600" />,
        },
        {
          name: 'Flutter',
          proficiency: 80,
          icon: () => <SiFlutter className="w-full h-8 text-blue-600" />,
        },

        {
          name: 'Bootstrap',
          proficiency: 80,
          icon: () => <FaBootstrap className="w-full h-8 text-purple-800" />,
        },

        {
          name: 'Tailwind',
          proficiency: 80,
          icon: () => <SiTailwindcss className="w-full h-8 text-gray-800" />,
        },
      ],
    },

    {
      label: 'Other skills',
      skills: [
        {
          name: 'Github',
          proficiency: 80,
          icon: () => <FaGithub className="w-full h-8 " />,
        },

        {
          name: 'Amazon web services',
          proficiency: 80,
          icon: () => <FaAws className="w-full h-7 text-yellow-800" />,
        },
      ],
    },
  ],
};
