import React from 'react';
import Image from 'next/image';

const SkillCard = ({ imgLink, skillName }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgLink} height={64} width={64} alt="/" />
        </div>
        {/* don't flow out of the box */}

        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">{skillName}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
