import {IUsersRepository} from "../../repositories/IUserRepository";
import {Hat, User} from "../../models/user.model";
import * as jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../settings";

export class JWTAuthenticationUseCase {
    constructor(private userRepository: IUsersRepository) {}

    async execute(email: string, password: string): Promise<string> {
        let user: User = await this.userRepository.findUserByEmail(email);
        if (user && (user.type === Hat.student || user.type === Hat.supporter) && await user.validPassword(password)) {
            return jwt.sign({ id: user.id, email: user.email, type: user.type }, JWT_SECRET);
        }
        return null;
    }

}
