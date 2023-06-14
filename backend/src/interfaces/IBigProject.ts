import IBase from "./IBase";
export default interface IBigProject extends IBase {
    image: string;
    overview: string;
    codeLink: string;
    liveLink: string;
    isPrivate: boolean;
    technologies: string[];
}