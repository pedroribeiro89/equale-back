import {Router} from "express";
import {donationController} from "../useCases/MakeDonation";

export class DonationRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/donation")
            .post((request, response) => { return donationController.handle(request, response); })
    }
}
