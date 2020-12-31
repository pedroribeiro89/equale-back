import {Router} from "express";
import {jwtAuthController} from "../useCases/JWTAuthentication";

export class AuthRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/auth-token").post((request, response) => {
            return jwtAuthController.handle(request, response);
        });
    }
}
