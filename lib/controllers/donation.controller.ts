import {Request, Response} from "express";
import {Hat, User, UserInterface} from "../models/user.model";

export class DonationController {

    public createDonation(req: Request, res: Response) {
        console.log(req.body);

        console.log(JSON.parse(req.body.paymentDataForm));
        console.log(JSON.parse(req.body.userDataForm));
        // console.log(JSON.parse(req.body));
        res.status(201);
        // const params: UserInterface = req.body;
        //
        // params.type = Hat.student;
        // User.create<User>(params)
        //     .then((user: User) => res.status(201).json(user))
        //     .catch((err: Error) => res.status(500).json(err));
    }
}
