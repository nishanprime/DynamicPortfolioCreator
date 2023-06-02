import React, { useContext } from 'react';
import { CurrentUser } from '../../pages/user/[uid]';
import SkillCard from './SkillCard';

const Skills = () => {
  const data = useContext(CurrentUser);
  const { skills } = data;
  return (
    <div id="skills" className="sm:text-center lg:text-left w-full lg: p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>

        {skills.length > 0 ? (
          <>
            <h2 className="py-4">What I Can Do</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill) => {
                let skillName = skill.name.toUpperCase();
                //truncate skill name if it is too long
                if (skillName.length > 9) {
                  skillName = skillName.slice(0, 9) + '...';
                }
                return (
                  <SkillCard
                    imgLink={skill.imgLink}
                    skillName={skillName}
                    key={skill.imgLink}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-red-500 font-bold text-lg">No Skills Added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
