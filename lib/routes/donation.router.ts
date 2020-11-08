import {Router} from "express";
import {donationController} from "../useCases/MakeDonation";
// import {DonationController} from "../controllers/donation.controller";

export class DonationRoutes {

    public router: Router;
    // public donationController = new DonationController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/donation")
            .post((request, response) => { return donationController.handle(request, response); })
            // .post(this.donationController.createDonation);
    }
}
