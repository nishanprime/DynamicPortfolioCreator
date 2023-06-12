export default interface IBase {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    created_by?: string;
    updated_by?: string;
    deleted_by?: string;
    deleted_at?: Date;
}