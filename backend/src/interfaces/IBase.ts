import {ObjectId} from "mongoose"
export default interface IBase {
    _id: ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    created_by?: string;
    updated_by?: string;
    deleted_by?: string;
    deleted_at?: Date;
}