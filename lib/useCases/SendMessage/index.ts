import {chatMapper, messagesRepository} from "../ListUserMessages";
import {SendMessageController} from "./SendMessageController";
import {SendMessageUseCase} from "./SendMessageUseCase";

const sendMessageUseCase = new SendMessageUseCase(messagesRepository, chatMapper);
const sendMessageController = new SendMessageController(sendMessageUseCase);

export { sendMessageUseCase, sendMessageController };
