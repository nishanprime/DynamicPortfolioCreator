import axios from 'axios';

// get required data from api and show the page accordingly

import Head from 'next/head';
import { createContext } from 'react';

import About from '../../Components/MainPart/About';
import Contact from '../../Components/MainPart/Contact';
import Main from '../../Components/MainPart/Main';
import Projects from '../../Components/MainPart/Projects';
import Skills from '../../Components/MainPart/Skills';
import Navbar from '../../Components/MainPart/Navbar';

const CurrentUser = createContext(null);
export default function Home({ user }) {
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
  } = user;
  return (
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
  );
}

//get server side props
export const getServerSideProps = async (context) => {
  //get the username from the url
  const username = context.params.username;

  //get the user data from the database
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URI}/users/getuserinfo/${username}`
    );

    const user = data;
    //if user is not found
    if (!user) {
      //return 404
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    //return the user data
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/?notFound=true',
        permanent: false,
      },
    };
  }
};

export { CurrentUser };
