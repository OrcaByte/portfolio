import React from 'react';
import SkillCard from './SkillCard';
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaPython,
  FaAws,
} from 'react-icons/fa';
import { SiDart, SiFlutter, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function SkillsLanguages() {
  return (
    <div className="home-card scrollbar">
      <h3 className="text-3xl mb-4 text-center font-semibold text-white">
        Languages
      </h3>

      <div className="w-full grid grid-cols-3 gap-4">
        <SkillCard label="HTML" percentage={90}>
          <FaHtml5 className="w-full h-8 text-purple-500" />
        </SkillCard>

        <SkillCard label="CSS3" percentage={90}>
          <FaCss3Alt className="w-full h-8 text-blue-600" />
        </SkillCard>

        <SkillCard label="Javascript" percentage={80}>
          <FaJs className="w-full h-8 text-yellow-400" />
        </SkillCard>

        <SkillCard label="Dart" percentage={80}>
          <SiDart className="w-full h-8 text-blue-500" />
        </SkillCard>

        <SkillCard label="Python" percentage={80}>
          <FaPython className="w-full h-8 text-blue-500" />
        </SkillCard>

        <SkillCard label="Typescript" percentage={80}>
          <SiTypescript className="w-full h-7 text-blue-600" />
        </SkillCard>
      </div>

      <h3 className="text-3xl my-4 text-center font-semibold text-white">
        Frameworks & Libraries
      </h3>

      <div className="w-full grid grid-cols-3 gap-4">
        <SkillCard label="NodeJs" percentage={80}>
          <FaNodeJs className="w-full h-8 text-green-600" />
        </SkillCard>

        <SkillCard label="ReactJS" percentage={80}>
          <FaReact className="w-full h-8 text-purple-600" />
        </SkillCard>

        <SkillCard label="Angular 2+" percentage={80}>
          <FaAngular className="w-full h-8 text-red-600" />
        </SkillCard>

        <SkillCard label="Flutter" percentage={80}>
          <SiFlutter className="w-full h-8 text-blue-600" />
        </SkillCard>

        <SkillCard label="Bootstrap" percentage={80}>
          <FaBootstrap className="w-full h-8 text-purple-800" />
        </SkillCard>

        <SkillCard label="Tailwind" percentage={80}>
          <SiTailwindcss className="w-full h-8 text-gray-800" />
        </SkillCard>
      </div>

      <h3 className="text-3xl my-4 text-center font-semibold text-white">
        Other skills
      </h3>

      <div className="w-full grid grid-cols-3 gap-4">
        <SkillCard label="Github" percentage={80}>
          <FaGithub className="w-full h-8 " />
        </SkillCard>

        <SkillCard label="Amazon web services" percentage={80}>
          <FaAws className="w-full h-7 text-yellow-800" />
        </SkillCard>
      </div>
    </div>
  );
}
