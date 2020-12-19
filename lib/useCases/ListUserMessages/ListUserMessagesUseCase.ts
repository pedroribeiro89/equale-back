import {IUsersRepository} from "../../repositories/IUserRepository";
import {User} from "../../models/user.model";
import {IChatDTO} from "./ChatDTO";
import {Message} from "../../models/message.model";
import {IMessagesRepository} from "../../repositories/IMessagesRepository";
import {ChatMapper} from "./ChatMapper";

export class ListUserMessagesUseCase {
    constructor(private userRepository: IUsersRepository, private messagesRepository: IMessagesRepository, private mapper: ChatMapper) {}

    async execute(userId: number, receiverId: number): Promise<IChatDTO> {
        let receiver: User = await this.userRepository.getById(receiverId);

        let messages: Message[] = await this.messagesRepository.listMessagesBySenderReceiver(userId, receiverId);

        return this.mapper.toChatDTO(receiver, messages);
    }

}
