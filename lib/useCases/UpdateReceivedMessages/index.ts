import {messagesRepository} from "../ListUserMessages";
import {UpdateReceivedMessagesUseCase} from "./UpdateReceivedMessagesUseCase";
import {UpdateReceivedMessagesController} from "./UpdateReceivedMessagesController";

const updateReceivedMessagesUseCase = new UpdateReceivedMessagesUseCase(messagesRepository);
const updateReceivedMessagesController = new UpdateReceivedMessagesController(updateReceivedMessagesUseCase);

export { updateReceivedMessagesUseCase, updateReceivedMessagesController };

