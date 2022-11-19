import React, { useContext } from 'react';
import Link from 'next/link';
import { CurrentUser } from '../../pages/user/[uid]';
import Image from 'next/image';
const About = () => {
  const data = useContext(CurrentUser);
  const { about, username } = data;
  return (
    data && (
      <div id="about" className="w-full md: p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="sm:text-center mb-5 md:uppercase text-xl tracking-widest text-[#5651e5]"></p>
            <h2 className="sm:text-center mb-5 md:py-4">Who I am</h2>

            <p className="sm:text-center mb-5 md:py-2 text-gray-600">{about}</p>
            <Link href={`/user/${username}/#projects`}>
              <p className="sm:text-center mb-5 md:py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="sm:hidden md:block w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={'/asset/whoami.png'} height="400" width={400} />
          </div>
        </div>
      </div>
    )
  );
};

export default About;
