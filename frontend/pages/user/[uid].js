import axios from 'axios';

import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// get required data from api and show the page accordingly

import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';

import About from '../../Components/MainPart/About';
import Contact from '../../Components/MainPart/Contact';
import Main from '../../Components/MainPart/Main';
import Projects from '../../Components/MainPart/Projects';
import Skills from '../../Components/MainPart/Skills';
import Navbar from '../../Components/MainPart/Navbar';
import { useRouter } from 'next/router';
import SkillCard from '../../Components/MainPart/SkillCard';
const CurrentUser = createContext(null);
export default function Home() {
  const router = useRouter();
  const { uid } = router.query;

  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState({});
  const [created, setCreated] = useState('');
  const [email, setEmail] = useState('');
  const [endDescription, setEndDescription] = useState('');
  const [gender, setGender] = useState('');
  const [lastName, setLastName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [logo, setLogo] = useState('');
  const [personalProjects, setPersonalProjects] = useState([]);
  const [profilePicture, setProfilePicture] = useState('');
  const [resume, setResume] = useState('');
  const [skills, setSkills] = useState([]);
  const [startDescription, setStartDescription] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [allLoaded, setAllLoaded] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  let wid;
  let hei;
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    // for main
    window.addEventListener('resize', () => {
      hei = window.innerHeight;
      wid = window.innerWidth;
    });

    // for nav bar
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    if (uid) {
      const getALlInfo = async () => {
        const { data } = await axios.get(
          `${process.env.BACKEND_URI}/users/getuserinfo/${uid}`
        );
        console.log(data);
        const {
          firstName,
          username,
          contact,
          created,
          email,
          endDescription,
          gender,
          githubLink,
          lastName,
          linkedinLink,
          logo,
          personalProjects,
          profilePicture,
          resume,
          skills,
          startDescription,
          title,
          about,
        } = data;
        setFirstName(firstName);
        setUsername(username);
        setContact(contact);
        setCreated(created);
        setEmail(email);
        setEndDescription(endDescription);
        setGender(gender);
        setGithubLink(githubLink);
        setLastName(lastName);
        setLinkedinLink(linkedinLink);
        setLogo(logo);
        setPersonalProjects(personalProjects);
        setProfilePicture(profilePicture);
        setResume(resume);
        setSkills(skills);
        setStartDescription(startDescription);
        setTitle(title);
        setAbout(about);
        setAllLoaded(true);
      };
      getALlInfo();
    }
  }, [router, hei, wid]);
  //if user is not null destructure

  return (
    allLoaded && (
      <CurrentUser.Provider
        value={{
          firstName,
          username,
          contact,
          created,
          email,
          endDescription,
          gender,
          githubLink,
          lastName,
          linkedinLink,
          logo,
          personalProjects,
          profilePicture,
          resume,
          skills,
          startDescription,
          title,
          about,
          created,
        }}
      >
        <div>
          <Head>
            <title>{`${firstName} ${lastName} | ${title}`}</title>
            <meta
              name="description"
              content={`Portfolio site of ${firstName} ${lastName} | ${title}`}
            />
            <link rel="icon" href="/fav.png" />
          </Head>
          {/* Nav Bar Start */}
          <div
            style={{ backgroundColor: `${navBg}` }}
            className={
              shadow
                ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                : 'fixed w-full h-20 z-[100]'
            }
          >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
              <Link href="/">
                <h1>{`${firstName.split('')[0]}${lastName.split('')[0]}`}</h1>
              </Link>
              <div>
                <ul
                  style={{ color: `${linkColor}` }}
                  className="hidden md:flex"
                >
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <Link href={`/user/${username}`}>Home</Link>
                  </li>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <Link href={`/user/${username}#about`}>About</Link>
                  </li>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <Link href={`/user/${username}#skills`}>Skills</Link>
                  </li>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <Link href={`/user/${username}#projects`}>Projects</Link>
                  </li>
                  <li className="hidden md:block ml-10 text-sm uppercase hover:border-b">
                    <a href={resume} target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  </li>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <Link href={`/user/${username}#contact`}>Contact</Link>
                  </li>
                </ul>
                {/* Hamburger Icon */}
                <div
                  style={{ color: `${linkColor}` }}
                  onClick={handleNav}
                  className="md:hidden"
                >
                  <AiOutlineMenu size={25} />
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
              className={
                nav
                  ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                  : ''
              }
            >
              {/* Side Drawer Menu */}
              <div
                className={
                  nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
              >
                <div>
                  <div className="flex w-full items-center justify-between">
                    <Link href="/">
                      <h1>{`${firstName.split('')[0]}${
                        lastName.split('')[0]
                      }`}</h1>
                    </Link>
                    <div
                      onClick={handleNav}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                  <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">
                      {startDescription}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex flex-col">
                  <ul className="uppercase">
                    <Link href={`/user/${username}`}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        Home
                      </li>
                    </Link>
                    <Link href={`/user/${username}#about`}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        About
                      </li>
                    </Link>
                    <Link href={`/user/${username}#skills`}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        Skills
                      </li>
                    </Link>
                    <Link href={`/user/${username}#projects`}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        Projects
                      </li>
                    </Link>
                    <a
                      className="md:hidden"
                      href={resume}
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        Resume
                      </li>
                    </a>
                    <Link href={`/user/${username}#contact`}>
                      <li
                        onClick={() => setNav(false)}
                        className="py-4 text-sm"
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                  <div className="pt-40">
                    <p className="uppercase tracking-widest text-[#5651e5]">
                      Let&#39;s Connect
                    </p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <a
                        href="https://www.linkedin.com/in/clint-briley-50056920a/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaLinkedinIn />
                        </div>
                      </a>
                      <a
                        href="https://github.com/fireclint"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaGithub />
                        </div>
                      </a>
                      <Link href="/#contact">
                        <div
                          onClick={() => setNav(!nav)}
                          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                          <AiOutlineMail />
                        </div>
                      </Link>
                      <Link href="/resume">
                        <div
                          onClick={() => setNav(!nav)}
                          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                          <BsFillPersonLinesFill />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Nav Bar end */}
          {/* <Navbar /> */}
          {/* main start */}
          <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-around items-center">
              <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">
                  {startDescription}
                </p>
                <h1 className="py-4 text-gray-700">
                  Hi, I&#39;m{' '}
                  <span className="text-[#5651e5]"> {firstName}</span>
                </h1>
                <h1 className="py-2 text-gray-700">A {title}</h1>
                <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                  {endDescription}
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <a href={linkedinLink} target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href={`/user/${username}/#contact`}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <div className="hidden md:block">
                    <a href={resume} target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </div>
                  <div className="md:hidden">
                    <a
                      href="assets/nishan-thapa-resume.pdf"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block justify-right p-8 shadow-xl shadow-gray-500 border-8 rounded-xl hover:scale-110 ease-in duration-300">
                <img
                  src={profilePicture}
                  alt={`${firstName} profile picture`}
                  width={300}
                />
              </div>
            </div>
          </div>
          {/* main end */}
          {/* about */}
          <div id="about" className="w-full md: p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <p className="sm:text-center mb-5 md:uppercase text-xl tracking-widest text-[#5651e5]"></p>
                <h2 className="sm:text-center mb-5 md:py-4">Who I am</h2>

                <p className="sm:text-center mb-5 md:py-2 text-gray-600">
                  {about}
                </p>
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
          {/* about end */}
          {/* skills */}
          <div
            id="skills"
            className="sm:text-center lg:text-left w-full lg: p-2"
          >
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
                        // <SkillCard
                        //   imgLink={skill.imgLink}
                        //   skillName={skillName}
                        //   key={skill.imgLink}
                        // />
                        <div
                          key={skill.imgLink}
                          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                        >
                          <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                              <Image
                                src={skill.imgLink}
                                height={64}
                                width={64}
                                alt="/"
                              />
                            </div>
                            {/* don't flow out of the box */}

                            <div className="flex flex-col items-center justify-center">
                              <p className="text-lg font-bold">{skillName}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-red-500 font-bold text-lg">
                    No Skills Added
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* skills end */}
          {/* projects start */}
          <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
              <p className="sm:text-center lg:text-left text-xl tracking-widest uppercase text-[#5651e5]">
                Projects
              </p>

              <h2 className="py-4 mt-10">Personal Projects</h2>
              {personalProjects.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {personalProjects.map((project, index) => (
                    // <PeronalProject
                    //   key={index}
                    //   porjectName={project['project-title']}
                    //   link={project['project-link']}
                    //   description={project['project-description']}
                    // />
                    <div
                      key={index}
                      className="md:flex items-center justify-between w-70 mb-4 border-4 p-10 shadow-xl hover:scale-90 ease-in duration-100"
                    >
                      <div className="p-4 shadow-lg shadow-gray-500 border-2">
                        <h2 className="mb-1">{project['project-title']}</h2>
                        <p>{project['project-description']}</p>
                      </div>
                      <div className="mt-10 md:mt-0 p-5 md:p-5 shadow-lg shadow-gray-500 border-2">
                        <a
                          href={project['project-link']}
                          target={'_blank'}
                          rel="noreferrer"
                        >
                          <FaGithub size={30} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                //h1 saying no projects to show
                <div className="text-center">
                  <p className="text-red-500 font-bold text-lg">
                    No Projects Added
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* projects end */}
          {/* contact start */}
          <div id="contact" className="w-full lg:h-screen">
            <div className="text-center lg:text-left max-w-[1240px] m-auto px-2 py-16 w-full ">
              <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                Contact
              </p>
              <h2 className="py-4">Get In Touch</h2>
              <div className="grid lg:grid-cols-5 gap-8">
                {/* left */}
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="lg:p-4 h-full ">
                    <div className="hidden lg:block">
                      <img
                        className="rounded-xl hover:scale-105 ease-in duration-300"
                        src="https://t4.ftcdn.net/jpg/03/90/11/51/360_F_390115184_pC62LQRe5VlME5w1I1XgUxm6TeKMlQ7Q.jpg"
                        alt="/"
                      />
                    </div>
                    <div>
                      <h2 className="py-2">{`${firstName} ${lastName}`}</h2>
                      <p>{title}</p>
                      <p className="py-4">{contact.description}</p>
                      <p className="!text-red-400 !font-bold">
                        Note: {contact.note}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase pt-8">Connect With Me</p>
                      <div className="flex items-center justify-between py-4">
                        <a href={linkedinLink} target="_blank" rel="noreferrer">
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                          </div>
                        </a>
                        <a href={githubLink} target="_blank" rel="noreferrer">
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                          </div>
                        </a>

                        <Link href={`/user/${username}/#contact`}>
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                          </div>
                        </Link>
                        <a href={resume} target="_blank" rel="noreferrer">
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4">
                    <form
                      action={contact.getformioLink}
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                          <label className="uppercase text-sm py-2">Name</label>
                          <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="name"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="uppercase text-sm py-2">
                            Phone Number
                          </label>
                          <input
                            className="border-2 rounded-lg p-3 flex border-gray-300"
                            type="text"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input
                          className="border-2 rounded-lg p-3 flex border-gray-300"
                          type="email"
                          name="email"
                        />
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">
                          Subject
                        </label>
                        <input
                          className="border-2 rounded-lg p-3 flex border-gray-300"
                          type="text"
                          name="subject"
                        />
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">
                          Message
                        </label>
                        <textarea
                          className="border-2 rounded-lg p-3 border-gray-300"
                          rows="10"
                          name="message"
                        ></textarea>
                      </div>
                      <button className="w-full p-4 text-gray-100 mt-4">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-12">
                <Link href={`/user/${username}`}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp
                      className="text-[#5651e5]"
                      size={30}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* contact end */}
        </div>
      </CurrentUser.Provider>
    )
  );
}

export { CurrentUser };
