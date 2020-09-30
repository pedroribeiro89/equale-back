import {Hat, User} from "../../models/user.model";
import {IUsersRepository} from "../../repositories/IUserRepository";
import {StudentMapper} from "./StudentMapper";
import {IStudentDTO} from "./StudentDTO";

export class RetrieveStudentUseCase {
    constructor(private repository: IUsersRepository, private mapper: StudentMapper) {}

    async execute(id?: number): Promise<IStudentDTO | IStudentDTO[]> {
        if (id) {
            const user = await this.repository.findUserById(id);
            if (user && user.type === Hat.student) {
                return this.mapper.toDTO(user) ;
            }
        } else {
            const users: User[] = await this.repository.listByType(Hat.student);
            return users.map((user: User) => { return this.mapper.toDTO(user); });
        }
    }

}
