import { Router } from "express";
import {UserController} from "../controllers/user.controller";
import {retrieveStudentController} from "../useCases/RetrieveStudent";
import {AuthController} from "../controllers/auth.controller";

export class StudentRoutes {

    public router: Router;
    public userController = new UserController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/students")
            .get((request, response) => { return retrieveStudentController.handle(request, response); })
            // .get(this.userController.studentList)
            .post(this.userController.createStudent);

        app.route("/students/:id")
            .get((request, response) => { return retrieveStudentController.handle(request, response); })
            // .get(this.userController.getStudentById);
    }
}
