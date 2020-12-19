import {ListUserMessagesController} from "./ListUserMessagesController";
import {ListUserMessagesUseCase} from "./ListUserMessagesUseCase";
import {userRepoMySQl} from "../RetrieveStudent";
import {MessagesRepositoryMySQL} from "../../repositories/implementations/MessagesRepositoryMySQL";
import {ChatMapper} from "./ChatMapper";

const chatMapper = new ChatMapper();
const messagesRepository = new MessagesRepositoryMySQL();
const listUserMessagesUseCase = new ListUserMessagesUseCase(userRepoMySQl, messagesRepository, chatMapper);
const listUserMessagesController = new ListUserMessagesController(listUserMessagesUseCase);

export { listUserMessagesUseCase, listUserMessagesController, messagesRepository, chatMapper };
