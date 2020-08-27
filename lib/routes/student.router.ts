import { Router } from "express";
import {UserController} from "../controllers/user.controller";

export class StudentRoutes {

    public router: Router;
    public userController = new UserController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/students")
            .get(this.userController.studentList)
            .post(this.userController.createStudent);

        app.route("/students/:id")
            .get(this.userController.getStudentById);
    }
}
