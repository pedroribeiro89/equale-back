import { Request, Response } from "express";
import { NodesController } from "../controllers/nodes.controller";
import {CourseController} from "../controllers/course.controller";
import {UserController} from "../controllers/user.controller";
import * as cors from "cors";
import {corsConfig} from "./cors";
import {AuthController} from "../controllers/auth.controller";
// import * as passport from "passport";

export class Routes {
    public nodesController = new NodesController();
    public userController = new UserController();
    public courseController = new CourseController();
    public authController: AuthController = new AuthController();

    public routes(app): void {
        app.use(cors(corsConfig));
        this.configNodes(app);// TODO: remover
        this.configUser(app);
        this.configCourse(app);
    }

    private configNodes(app): void {
        app.route("/").get(this.nodesController.index);

        app.route("/nodes")
            .get(this.nodesController.index)
            .post(this.nodesController.create);

        app.route("/nodes/:id")
            .get(this.nodesController.show)
            .put(this.nodesController.update)
            .delete(this.nodesController.delete);
    }

    private configUser(app): void {
        // app.route("/users")
        //     .get(this.userController.list)
        //     .post(this.userController.create);
        //
        // app.route("/users/:id")
        //     .get(this.userController.getById);

        app.route("/students")
            .get(this.userController.studentList)
            .post(this.userController.createStudent);

        app.route("/students/:id")
            .get(this.userController.getStudentById);
    }

    private configCourse(app): void {
        app.route("/courses")
            .get(this.courseController.list);
    }
}
