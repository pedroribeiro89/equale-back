import {IBaseRepository} from "./IBaseRepository";
import {Message} from "../models/message.model";

export interface IMessagesRepository extends IBaseRepository<Message> {
    listMessagesBySenderReceiver(userId: number, receiverId: number): Promise<Message[]>;
}
