import {User} from "../../models/user.model";
import {DataMapper} from "../DataMapper";
import {IStudentDTO} from "./StudentDTO";

export class StudentMapper implements DataMapper<User> {
    toDTO(data: User): IStudentDTO {
        return {
            description: data.description,
            id: data.id,
            name: data.name,
            photo: data.photo,
            video: data.video
        };
    }

    toDomain(json: any): User {
        const user = new User();
        user.name = json.name;
        user.email = json.email;
        user.type = json.type;
        user.photo = json.photo;
        user.video = json.video;
        user.description = json.description;
        user.course_id = json.course_id;
        user.phone = json.phone;
        user.cep = json.cep;
        user.street = json.street;
        user.streetNumber = json.streetNumber;
        user.addressComplement = json.addressComplement;
        user.city = json.city;
        user.state = json.state;
        user.password = json.password;
        return user;
    }

    toPersistence(data: User): any {
        return {
            name: data.name,
            email: data.email,
            type: data.type,
            photo: data.photo,
            video: data.video,
            description: data.description,
            course_id: data.course_id,
            phone: data.phone,
            cep: data.cep,
            street: data.street,
            streetNumber: data.streetNumber,
            addressComplement: data.addressComplement,
            city: data.city,
            state: data.state,
            password: data.password
        };
    }

}
