import {IUsersRepository} from "../IUserRepository";
import {Hat, User} from "../../models/user.model";

export class UsersRepositoryMySQl implements IUsersRepository {
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

    save(data: User): Promise<any> {
        //TODO
        return undefined;
    }

    listByType(type: Hat): Promise<User[]> {
        return User.findAll<User>({ where: { type: Hat.student } });
    }

    async findUserById(id: number): Promise<User> {
        const user = await User.findByPk<User>(id);
        return user.type === Hat.student ? user : null;
    }

}
