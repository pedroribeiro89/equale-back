import {BaseDTO} from "../DataMapper";

export interface ContactDTO extends BaseDTO {
    id: number;
    email: string;
    pending: number;
}
