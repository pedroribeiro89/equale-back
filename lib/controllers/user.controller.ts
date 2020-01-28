import {Request, Response} from "express";
import {User, UserInterface} from "../models/user.model";

export class UserController {
    public list(req: Request, res: Response) {
        User.findAll<User>({})
            .then((users: Array<User>) => res.json(users))
            .catch((err: Error) => res.status(500).json(err));
    }

    public create(req: Request, res: Response) {
        const params: UserInterface = req.body;

        //TODO: validacao de campos
        User.create<User>(params)
            .then((user: User) => res.status(201).json(user))
            .catch((err: Error) => res.status(500).json(err));
    }

    public getById(req: Request, res: Response) {
        const userId: number = +req.params.id;

        User.findByPk<User>(userId)
            .then((user: User | null) => {
                if (user) {
                    res.json(user);
                } else {
                    res.status(404).json({ errors: ["User not found"] });
                }
            }).catch((err: Error) => res.status(500).json(err));
    }
}
