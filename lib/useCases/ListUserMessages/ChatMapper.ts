import {DataMapper} from "../DataMapper";
import {Message} from "../../models/message.model";
import {IChatDTO, IMessageDTO} from "./ChatDTO";
import {Hat, User} from "../../models/user.model";

export class ChatMapper implements DataMapper<Message> {
    toChatDTO(user: User, messages: Message[]): IChatDTO {
        return {
            receiver: { id: user.id, email: user.email },
            messages: messages.map((message: Message) => this.toDTO(message))
        };
    }

    toDTO(data: Message): IMessageDTO {
        return {
            id: data.id,
            message: data.message,
            createdAt: data['createdAt'],
            receiverId: data.userReceiver
        };
    }

    toDomain(json: any): Message {
        return Message.build({
            message: json.message,
            received: json.received,
            approved: json.approved,
            userSender: json.userSender,
            userReceiver: json.userReceiver
        });
    }

    toPersistence(data: Message): any {
    }

}
