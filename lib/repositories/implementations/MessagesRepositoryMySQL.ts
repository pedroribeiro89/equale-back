import {IMessagesRepository} from "../IMessagesRepository";
import {Message} from "../../models/message.model";
import {Op} from "sequelize";

export class MessagesRepositoryMySQL implements IMessagesRepository {
    delete(data: Message): Promise<any> {
        return Message.destroy({ where: { id: data.id.toString() } });
    }

    async exists(data: Message): Promise<boolean> {
        const message = await Message.findByPk<Message>(data.id);
        return message !== null || message !== undefined;
    }

    getById(id: number): Promise<Message> {
        return Message.findByPk<Message>(id);
    }

    list(): Promise<Message[]> {
        return Message.findAll<Message>();
    }

    async save(data: Message): Promise<Message> {
        await data.save();
        return data;
    }

    listMessagesBySenderReceiver(userId: number, receiverId: number): Promise<Message[]> {
        return Message.findAll({
            where: {
                [Op.or]: [
                    { userSender: userId.toString(), userReceiver: receiverId.toString() },
                    { userSender: receiverId.toString(), userReceiver: userId.toString() }
                ]
            },
            order: ['createdAt']
        });
    }

}
