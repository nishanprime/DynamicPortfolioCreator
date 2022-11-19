import axios from 'axios';

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
  useEffect(() => {
    if (uid) {
      const getALlInfo = async () => {
        const { data } = await axios.get(
          `${process.env.BACKEND_URI}/users/getuserinfo/${uid}`
        );
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
  }, [router]);
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
          <Navbar />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </CurrentUser.Provider>
    )
  );
}

export { CurrentUser };
