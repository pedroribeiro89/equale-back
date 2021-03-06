import {Hat, User} from "../models/user.model";
import {IBaseRepository} from "./IBaseRepository";

export interface IUsersRepository extends IBaseRepository<User> {
    findUserById(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    listByType(type: Hat): Promise<User[]>;
}
