import {BaseDTO} from "../DataMapper";

export interface IChatDTO extends BaseDTO {
    receiver: IMessageReceiverDTO;
    messages: IMessageDTO[];
}

export interface IMessageReceiverDTO {
    id: number;
    email: string;
}

export interface IMessageDTO extends BaseDTO {
    id: number;
    message: string;
    createdAt: Date;
    receiverId: number;
}
