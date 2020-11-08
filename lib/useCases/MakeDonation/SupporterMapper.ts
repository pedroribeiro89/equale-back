import {BaseDTO, DataMapper} from "../DataMapper";
import {Hat, User} from "../../models/user.model";
import {IDonationDTO} from "./DonationDTO";

export class SupporterMapper implements DataMapper<User> {
    toDTO(data: User): BaseDTO {
        return undefined;
    }

    toDomain(json: IDonationDTO): User {
        return User.build({
            name: json.userDataForm.name,
            email: json.userDataForm.email,
            type: Hat.supporter,
            phone: json.userDataForm.phone,
            cep: json.userDataForm.cep,
            street: json.userDataForm.street,
            streetNumber: json.userDataForm.streetNumber,
            addressComplement: json.userDataForm.addressComplement,
            city: json.userDataForm.city,
            state: json.userDataForm.state,
            password: json.userDataForm.password,
        });
    }

    toPersistence(data: User): any {
    }
}
