import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./config/routes";

import {Node} from "./models/node.model";
import {Course} from "./models/course.model";
import {User} from "./models/user.model";


const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs')
AdminBro.registerAdapter(AdminBroSequelize);


class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public adminBro = new AdminBro({
        databases: [User],
        rootPath: '/admin',
    });
    public router = AdminBroExpress.buildRouter(this.adminBro);

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.app.use(this.adminBro.options.rootPath, this.router);

    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
