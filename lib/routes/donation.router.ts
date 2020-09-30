import {Router} from "express";
import {DonationController} from "../controllers/donation.controller";

export class DonationRoutes {

    public router: Router;
    public donationController = new DonationController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/donation")
            // .get((request, response) => { return retrieveStudentController.handle(request, response); })
            .post(this.donationController.createDonation);
    }
}
