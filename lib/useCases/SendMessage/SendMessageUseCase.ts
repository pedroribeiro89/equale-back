import {IMessagesRepository} from "../../repositories/IMessagesRepository";
import {Message} from "../../models/message.model";
import {IMessageDTO} from "../ListUserMessages/ChatDTO";
import {ChatMapper} from "../ListUserMessages/ChatMapper";

export class SendMessageUseCase {
    constructor(private messagesRepository: IMessagesRepository, private chatMapper: ChatMapper) {}

    async execute(userId: number, receiverId: number, messageStr: string): Promise<IMessageDTO> {
        let message: Message = await this.messagesRepository.save(
            this.chatMapper.toDomain({
                message: messageStr,
                received: false,
                approved: false,
                userSender: userId,
                userReceiver: receiverId
            })
        );

        return this.chatMapper.toDTO(message);
    }

}
