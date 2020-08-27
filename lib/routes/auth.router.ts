import { Router } from "express";
import {AuthController} from "../controllers/auth.controller";

export class AuthRoutes {

    public router: Router;
    public authController = new AuthController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        // app.route("/students")
        //     .get(this.userController.studentList)
        //     .post(this.userController.createStudent);
        //
        // app.route("/students/:id")
        //     .get(this.userController.getStudentById);

        app.route("/login").post(this.authController.authenticateJWT);
    }
}
