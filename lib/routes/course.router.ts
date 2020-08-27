import { Router } from "express";
import {CourseController} from "../controllers/course.controller";

export class CourseRoutes {

    public router: Router;
    public courseController = new CourseController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/courses")
            .get(this.courseController.list);
    }
}
