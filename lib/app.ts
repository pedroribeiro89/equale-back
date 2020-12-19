import * as express from "express";
import * as bodyParser from "body-parser";
import {User} from "./models/user.model";
import {AdminRouter} from "./routes/admin.router";
import {StudentRoutes} from "./routes/student.router";
import {CourseRoutes} from "./routes/course.router";
// import * as passport from "passport";
import * as cors from "cors";
import {corsConfig} from "./config/cors";
import {AuthRoutes} from "./routes/auth.router";
import {DonationRoutes} from "./routes/donation.router";
import {UserRoutes} from "./routes/user.router";


class App {
    public app: express.Application;
    public authRoutes = new AuthRoutes();
    public studentRoutes = new StudentRoutes();
    public courseRoutes = new CourseRoutes();
    public donationRoutes = new DonationRoutes();
    public userRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.configApp();
        this.configRoutes();
    }

    private configApp(): void {
        let authRouter = new AdminRouter();
        this.app.use('/admin', authRouter.router);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(passport.initialize())
    }

    private configRoutes(): void {
        this.app.use(cors(corsConfig));
        this.authRoutes.configRoutes(this.app);
        this.studentRoutes.configRoutes(this.app);
        this.courseRoutes.configRoutes(this.app);
        this.donationRoutes.configRoutes(this.app);
        this.userRoutes.configRoutes(this.app);
    }
}

export default new App().app;
