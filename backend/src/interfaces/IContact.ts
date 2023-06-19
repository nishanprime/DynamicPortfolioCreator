import IBase from "./IBase";
export default interface IContact extends IBase {
    description: string;
    note: string;
    getformioLink: string;
}

