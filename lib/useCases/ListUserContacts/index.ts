import {ListContactsUseCase} from "./ListContactsUseCase";
import {ListContactsController} from "./ListContactsController";
import {userRepoMySQl} from "../RetrieveStudent";
import {ContactsRepositoryMySQL} from "../../repositories/implementations/ContactsRepositoryMySQL";
import {ContactsMapper} from "./ContactsMapper";

const contactsMapper = new ContactsMapper();
const contactRepo = new ContactsRepositoryMySQL();
const listContactsUseCase = new ListContactsUseCase(userRepoMySQl, contactRepo, contactsMapper);
const listContactsController = new ListContactsController(listContactsUseCase);

export { listContactsUseCase, listContactsController, contactsMapper, contactRepo };
