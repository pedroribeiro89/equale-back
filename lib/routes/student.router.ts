import { Router } from "express";
import {retrieveStudentController} from "../useCases/RetrieveStudent";

export class StudentRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/students")
            .get((request, response) => { return retrieveStudentController.handle(request, response); });

        app.route("/students/:id")
            .get((request, response) => { return retrieveStudentController.handle(request, response); })
    }
}
