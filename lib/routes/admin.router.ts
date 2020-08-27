import {Hat, User} from "../models/user.model";
import {UserController} from "../controllers/user.controller";
import {ADMIN} from "../settings";

const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
// AdminBro.registerAdapter(AdminBroSequelize);

export class AdminRouter {

    public router;
    public adminBro;
    public userController = new UserController();

    constructor() {
        AdminBro.registerAdapter(AdminBroSequelize);
        this.adminBro = new AdminBro({ databases: [User], rootPath: '/admin' });

        this.router = AdminBroExpress.buildAuthenticatedRouter(this.adminBro, {
            // cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
            // cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
            cookieName: 'admin-bro',
            cookiePassword: 'supersecret-and-long-password-for-a-cookie-in-the-browser',
            authenticate: async (email, password) => {
                if (email === ADMIN.email && password === ADMIN.password) {
                    return ADMIN;
                }
                let user: User = await this.userController.getStudentByEmail(email);
                if (user && user.type === Hat.admin && await user.validPassword(password)) {
                    return true;
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
