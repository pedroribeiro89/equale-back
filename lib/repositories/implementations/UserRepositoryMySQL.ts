import {IUsersRepository} from "../IUserRepository";
import {Hat, User} from "../../models/user.model";

export class UsersRepositoryMySQL implements IUsersRepository {
    delete(data: User): Promise<any> {
        return User.destroy({ where: { id: data.id.toString() } });
    }

    async exists(data: User): Promise<boolean> {
        const user = await User.findByPk<User>(data.id);
        return user !== null || user !== undefined;
    }

    getById(id: number): Promise<User> {
        return User.findByPk<User>(id);
    }

    list(): Promise<User[]> {
        return User.findAll<User>();
    }

    async save(data: User): Promise<User> {
        await data.save();
        return data;
    }

    listByType(type: Hat): Promise<User[]> {
        return User.findAll<User>({ where: { type: Hat.student } });
    }

    async findUserById(id: number): Promise<User> {
        const user = await User.findByPk<User>(id);
        return user.type === Hat.student ? user : null;
    }

    findUserByEmail(email: string): Promise<User> {
        return User.findOne<User>({ where: { email: email } });
    }

}
