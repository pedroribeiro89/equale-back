import {Hat, User} from "../models/user.model";
import {database} from "../config/database";
import {userRepoMySQl} from "../useCases/RetrieveStudent";

const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');

export class AdminRouter {

    public router;
    public adminBro;

    constructor() {
        AdminBro.registerAdapter(AdminBroSequelize);
        this.adminBro = new AdminBro({ databases: [database], rootPath: '/admin' });

        this.router = AdminBroExpress.buildAuthenticatedRouter(this.adminBro, {
            cookieName: 'admin-bro',
            cookiePassword: 'supersecret-and-long-password-for-a-cookie-in-the-browser',

            authenticate: async (email, password) => {
                if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                    return {
                        email: process.env.ADMIN_EMAIL,
                        password: process.env.ADMIN_PASSWORD
                    }
                }
                let user: User = await userRepoMySQl.findUserByEmail(email);
                if (user && user.type === Hat.admin && await user.validPassword(password)) {
                    return true;
                }
                return null;
            }
        }, null, {
            resave: false,
            saveUninitialized: true,
        });
    }

}
