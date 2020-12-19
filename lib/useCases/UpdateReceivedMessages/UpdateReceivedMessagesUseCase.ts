import {IMessagesRepository} from "../../repositories/IMessagesRepository";
import {Message} from "../../models/message.model";

export class UpdateReceivedMessagesUseCase {
    constructor(private messagesRepository: IMessagesRepository) {}

    async execute(userId: number, receiverId: number) {
        let messages: Message[] = await this.messagesRepository.listMessagesBySenderReceiver(userId, receiverId);
        for (const msg of messages) {
            if (msg.userReceiver === userId) {
                msg.received = true;
                await this.messagesRepository.save(msg);
            }
        }
    }

}
