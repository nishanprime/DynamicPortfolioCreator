import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getAllIcons } from '../actions/getAllIcons';
import UserContext from '../userContext';
import Multiselect from 'multiselect-react-dropdown';
import DynamicForm from '../Components/DynamicForm';
import axios from 'axios';
import Image from 'next/image';
export default function DetailInput() {
  const { user, logout, allIcons, updateUser, loading, error } =
    useContext(UserContext);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [endDescription, setEndDescription] = useState('');
  const [about, setAbout] = useState('');
  const [projectDetails, setProjectDetails] = useState([]);
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [getFormLink, setGetFormLink] = useState('');
  const [contactDescription, setContactDescription] = useState('');
  const [contactNote, setContactNote] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [resume, setResume] = useState('');
  const [username, setUsername] = useState('');
  const [mainURL, setMainURL] = useState('');
  const [email, setEmail] = useState('');
  const [fileUploading, setFileUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/get-started');
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      user.title && setTitle(user.title);
      user.about && setAbout(user.about);
      user.skills && setSelectedSkills(user.skills);
      user.startDescription && setIntro(user.startDescription);
      user.endDescription && setEndDescription(user.endDescription);
      user.githubLink && setGithubLink(user.githubLink);
      user.linkedinLink && setLinkedinLink(user.linkedinLink);
      user.contact.getformioLink && setGetFormLink(user.contact.getformioLink);
      user.contact.description &&
        setContactDescription(user.contact.description);
      user.contact.note && setContactNote(user.contact.note);
      user.profilePicture && setProfilePicture(user.profilePicture);
      user.resume && setResume(user.resume);
      user.username && setUsername(user.username);
      user.email && setEmail(user.email);
      setMainURL(window.location.origin);
      setProjectDetails(user.personalProjects);
    }
  }, [user]);

  const profilePictureUploadHandler = async (e) => {
    e.preventDefault();
    let targetFile = e.target.id;
    const file = e.target.files[0];

    if (file.size > 500000000) {
      alert('Make sure your upload is less than 5MB');
      return;
    }
    const formData = new FormData();
    try {
      if (targetFile === 'profile-upload') {
        formData.append('upload', file);
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.token}`,
          },
        };
        setFileUploading(true);
        const { data } = await axios.post(
          `${process.env.BACKEND_URI}/users/upload/profile`,
          formData,
          config
        );
        console.log(data);
        console.log('Printing data from profile upload: ', data);
        console.log(data);
        setProfilePicture(data);
        setFileUploading(false);

        return;
      } else if (targetFile === 'resume-upload') {
        formData.append('upload', file);
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.post(
          `${process.env.BACKEND_URI}/users/upload/resume`,
          formData,
          config
        );
        setResume(data);
      } else {
        alert('Something went wrong');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    updateUser({
      firstName,
      lastName,
      title,
      startDescription: intro,
      endDescription,
      githubLink,
      linkedinLink,
      personalProjects: projectDetails,
      about,
      skills: selectedSkills,
      contact: {
        getformioLink: getFormLink,
        description: contactDescription,
        note: contactNote,
      },
      resume,
      profilePicture,
    });
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="h-screen text-center flex flex-col justify-center">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="bg-white">
          <div className="px-4 py-3 text-center sm:px-6">
            <button
              onClick={logout}
              className="rounded-md border border-transparent bg-gradient-to-r from-[#ff0505] to-[#b92e6f] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-75 duration-100 ease-in-out"
            >
              LOG OUT
            </button>
          </div>

          <form onSubmit={formSubmitHandler} encType="multipart/form-data">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-transparent px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <text className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      {username}
                    </text>

                    <label
                      htmlFor="first-name"
                      className="block text-lg font-medium text-gray-700 mt-2"
                    >
                      Registered Email
                    </label>
                    <text className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      {email}
                    </text>
                    <div className="flex justify-start gap-3 items-center mt-2">
                      <p className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        Shareable Link:
                      </p>
                      <a
                        href={`${mainURL}/user/${username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="text-blue-500 underline">{`${mainURL}/user/${username}`}</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      required
                      id="first-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Profile Picture
                    </label>
                    <div class="mt-1 flex gap-10 justify-around items-end rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600 justify-center">
                          {fileUploading ? (
                            <label
                              for="profile-upload"
                              class="cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Uploading...</span>
                            </label>
                          ) : (
                            <label
                              for="profile-upload"
                              class="cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a picture</span>
                              <input
                                id="profile-upload"
                                name="profile-upload"
                                accept="image/*"
                                onChange={profilePictureUploadHandler}
                                type="file"
                                class="sr-only"
                              />
                            </label>
                          )}
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                      <div>
                        <Image src={profilePicture} height="80" width="80" />
                        <p>Current Picture</p>
                      </div>
                    </div>
                  </div>
                  {/* Resume Upload */}
                  <div className="col-span-2">
                    <label class="block text-sm font-medium text-gray-700">
                      Resume
                    </label>
                    <div class="mt-1 flex gap-10 justify-around items-end rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600 justify-center">
                          {fileUploading ? (
                            <label
                              for="resume-upload"
                              class="relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Uploading...</span>
                              <input
                                id="resume-upload"
                                name="resume-upload"
                                type="file"
                                onChange={profilePictureUploadHandler}
                                class="sr-only"
                              />
                            </label>
                          ) : (
                            <label
                              for="resume-upload"
                              class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a resume</span>
                              <input
                                id="resume-upload"
                                name="resume-upload"
                                type="file"
                                onChange={profilePictureUploadHandler}
                                class="sr-only"
                              />
                            </label>
                          )}
                        </div>
                        <p class="text-xs text-gray-500">
                          PDF, DOCX, TXT up to 5MB
                        </p>
                        <p class="text-xs text-gray-500">Selected File</p>
                      </div>
                      <div>
                        <Image
                          src="https://dazzlesl.info/wp-content/uploads/2021/05/quartadis180900107.jpg"
                          height="80"
                          width="80"
                        />
                        <a
                          href={resume}
                          target="_blank"
                          className="text-blue-500 cursor-pointer underline"
                          rel="noreferrer"
                        >
                          Current Resume (Click here)
                        </a>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className={'text-xs text-gray-500'}>
                      {' '}
                      Eg: Full Stack Developer | Lead Mech Engineer
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="short-intro"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Intro
                    </label>
                    <input
                      required
                      type="text"
                      name="intro"
                      id="intro"
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className={'text-xs text-gray-500'}>
                      {' '}
                      Eg: Lets build something together...
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="short-end-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Outro
                    </label>
                    <input
                      required
                      type="text"
                      name="end-description"
                      id="end-description"
                      value={endDescription}
                      onChange={(e) => setEndDescription(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className={'text-xs text-gray-500'}>
                      {' '}
                      Eg: I specialize in building full stack applications...
                    </p>
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="short-intro"
                      className="block text-sm font-medium text-gray-700"
                    >
                      GitHub Link
                    </label>
                    <input
                      type="text"
                      name="github-link"
                      placeholder="eg: https://github.com/nishanprime"
                      id="github-link"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="short-intro"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LinkedIn Link
                    </label>
                    <input
                      type="text"
                      placeholder="eg: https://www.linkedin.com/in/nishanprime/"
                      name="linkedin-link"
                      id="linkedin-link"
                      value={linkedinLink}
                      onChange={(e) => setLinkedinLink(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        required
                        id="about"
                        name="about"
                        rows={3}
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Tell us about yourself | This would go to 'Who am I?' section"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="getform-link"
                      className="block text-sm font-medium text-gray-700"
                    >
                      GetForm.IO Form Link For Contact Page
                    </label>
                    <input
                      type="text"
                      placeholder="eg: https://getform.io/f/04aee7d6-d0ec-4263-989a-cd8c48cd940e"
                      name="getform-link"
                      id="getform-link"
                      value={getFormLink}
                      onChange={(e) => setGetFormLink(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className={'text-xs text-gray-500'}>
                      Go to{' '}
                      <span>
                        <a
                          href="https://getform.io/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-blue-500"
                        >
                          https://getform.io/
                        </a>
                      </span>{' '}
                      and create a form. Copy the link and paste it here.
                    </p>
                  </div>
                  {/*  */}
                  <div className="col-span-2">
                    <label
                      htmlFor="note-in-contact-page"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Note Text in Contact Page
                    </label>
                    <input
                      type="text"
                      placeholder="eg: Looking for COOP Position for Spring/Summer 2022"
                      name="note-in-contact-page"
                      id="note-in-contact-page"
                      value={contactNote}
                      onChange={(e) => setContactNote(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/*  */}
                  <div className="col-span-2">
                    <label
                      htmlFor="description-in-contact-page"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description Text in Contact Page
                    </label>
                    <input
                      type="text"
                      placeholder="eg: I am available for freelance or full-time positions. Contact me and let's talk."
                      name="description-in-contact-page"
                      id="description-in-contact-page"
                      value={contactDescription}
                      onChange={(e) => setContactDescription(e.target.value)}
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {allIcons && (
                    <div className="col-span-6">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Skills
                      </label>

                      <div className="mt-1">
                        <Multiselect
                          placeholder="Select Skills"
                          options={allIcons}
                          selectedValues={selectedSkills} // Preselected value to persist in dropdown
                          onSelect={(val) => {
                            setSelectedSkills(val);
                          }} // Function will trigger on select event
                          onRemove={(val) => {
                            setSelectedSkills(val);
                          }} // Function will trigger on remove event
                          displayValue="name" // Property name to display in the dropdown options
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-span-6">
                    <label
                      htmlFor="skills"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Personal Projects Section
                    </label>
                    {user && user.personalProjects && (
                      <DynamicForm
                        retrieveProjects={(e) => {
                          //set project details
                          setProjectDetails(e);
                        }}
                        projects={user.personalProjects}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex  rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-75 duration-100 ease-in-out"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
