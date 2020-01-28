import { Request, Response } from "express";
import { NodesController } from "../controllers/nodes.controller";
import {CourseController} from "../controllers/course.controller";
import {UserController} from "../controllers/user.controller";

export class Routes {
    public nodesController = new NodesController();
    public userController = new UserController();
    public courseController = new CourseController();


    public routes(app): void {
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
        app.route("/user")
            .get(this.userController.list)
            .post(this.userController.create);

        app.route("/user/:id")
            .get(this.userController.getById);
    }

    private configCourse(app): void {
        app.route("/course")
            .get(this.courseController.list);
    }
}
