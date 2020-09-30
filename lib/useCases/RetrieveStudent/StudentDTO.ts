import {BaseDTO} from "../DataMapper";

export interface IStudentDTO extends BaseDTO {
    id: number;
    name: string;
    photo: string;
    video: string;
    description: string;
}
