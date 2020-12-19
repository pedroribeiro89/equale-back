import {Hat, User} from "../../models/user.model";
import {IUsersRepository} from "../../repositories/IUserRepository";
import {IContactsRepository} from "../../repositories/IContactsRepository";
import {ContactsMapper} from "./ContactsMapper";


export class ListContactsUseCase {
    constructor(private userRepository: IUsersRepository, private contactsRepository: IContactsRepository<any[]>, private mapper: ContactsMapper) {}

    async execute(id: number): Promise<any> {
        let user: User = await this.userRepository.getById(id);

        let contactList: any[] = [];
        if (user.type === Hat.student) {
            contactList = await this.listStudentsContacts(user);
        } else if (user.type === Hat.supporter) {
            contactList = await  this.listSupporterContacts(user);
        }
        return this.mapper.toDTO(contactList);
    }

    private listStudentsContacts(user: User): Promise<any[]> {
        return this.contactsRepository.listByMessages(user.id);
    }

    private listSupporterContacts(user: User): Promise<any[]> {
        return this.contactsRepository.listByStudents(user.id);
    }

}
