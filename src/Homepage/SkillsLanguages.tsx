import React, { useContext } from 'react';
import SkillCard from './SkillCard';
import { GlobalContext } from '../globalContext';

export default function SkillsLanguages() {
  const { skills } = useContext<any>(GlobalContext);

  return (
    <div className="home-card scrollbar">
      {skills.map((detail: any) => (
        <>
          <h3 className="text-3xl mb-4 text-center font-semibold text-white">
            {detail.label}
          </h3>

          <div className="w-full mb-4 grid grid-cols-3 gap-4">
            {detail.skills.map((skill: any) => (
              <SkillCard label={skill.name} percentage={skill.proficiency}>
                {skill.icon()}
              </SkillCard>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
