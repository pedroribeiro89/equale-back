import {Router} from "express";
import {AuthController} from "../controllers/auth.controller";
import {listContactsController} from "../useCases/ListUserContacts";
import {listUserMessagesController} from "../useCases/ListUserMessages";
import {updateReceivedMessagesController} from "../useCases/UpdateReceivedMessages";
import {sendMessageController} from "../useCases/SendMessage";

export class UserRoutes {

    public router: Router;
    public authController = new AuthController();

    constructor() {
        this.router = Router();
    }

    configRoutes(app) {
        app.route("/users/:id/contacts")
            .get(this.authController.authenticateJWT, (request, response) => { return listContactsController.handle(request, response); });

        app.route("/users/:userId/messages")
            .get(this.authController.authenticateJWT, (request, response) => { return listUserMessagesController.handle(request, response); })
            .patch(this.authController.authenticateJWT, (request, response) => { return updateReceivedMessagesController.handle(request, response); })
            .post(this.authController.authenticateJWT, (request, response) => { return sendMessageController.handle(request, response); });
    }
}
