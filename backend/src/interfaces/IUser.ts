import IBase from "./IBase";
import IPersonalProject from "./IPersonalProject";
import ISkills from "./ISkills";
export default interface IUser extends IBase {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: string;
    profilePicture: string;
    about: string;
    logo: string;
    startDescription: string;
    endDescription: string;
    title: string;
    githubLink: string;
    linkedinLink: string;
    resume: string;
    bigProjects: string; // projects interface object
    skills: ISkills[]; //skills interface array
    personalProjects: IPersonalProject[]; // personal projects interface object
    contact: string; // contact interface object
    matchPassword?: (enteredPassword: string) => Promise<boolean>;
}