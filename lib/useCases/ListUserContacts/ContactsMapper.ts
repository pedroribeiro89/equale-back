import {DataMapper} from "../DataMapper";
import {ContactDTO} from "./ContactDTO";

export class ContactsMapper implements DataMapper<any> {
    toDTO(data: any[]): ContactDTO[] {
        return data.map(contact => {
           return { id: contact.id, email: contact.email, pending: contact.pending };
        });
    }

    toDomain(json: any): any {
        return undefined;
    }

    toPersistence(data: any): any {
    }


}
