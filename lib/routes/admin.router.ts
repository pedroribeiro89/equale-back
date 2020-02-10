import {User} from "../models/user.model";

const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
// AdminBro.registerAdapter(AdminBroSequelize);

import * as express from "express";

export class AdminRouter {

    public ADMIN = {
        // email: process.env.ADMIN_EMAIL || 'admin@example.com',
        // password: process.env.ADMIN_PASSWORD || 'lovejs'
        email: 'admin@example.com',
        password: 'lovejs'
    };

    public router;
    public adminBro;


    constructor() {
        AdminBro.registerAdapter(AdminBroSequelize);
        this.adminBro = new AdminBro({ databases: [User], rootPath: '/admin' });

        this.router = AdminBroExpress.buildAuthenticatedRouter(this.adminBro, {
            // cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
            // cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
            cookieName: 'admin-bro',
            cookiePassword: 'supersecret-and-long-password-for-a-cookie-in-the-browser',
            authenticate: async (email, password) => {
                if (email === this.ADMIN.email && password === this.ADMIN.password) {
                    return this.ADMIN;
                }
                return null;
            }
        });

        // let router = express.Router();
        // router.use((req, res, next) => {
        //     console.log(req);
        //     // if (req.session && req.session.admin) {
        //     //     req.session.adminUser = req.session.admin
        //     //     next()
        //     // } else {
        //         res.redirect(this.adminBro.options.loginPath)
        //     // }
        // })
        // router = AdminBroExpress.buildRouter(this.adminBro, router);
        // this.router = router;
    }

}
