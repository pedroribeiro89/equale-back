import * as passport from "passport";
import {ExtractJwt, Strategy, StrategyOptions, VerifyCallback} from "passport-jwt";
import {JWT_SECRET} from "../settings";
import {User} from "../models/user.model";

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};

const verifyCallback: VerifyCallback = function (jwtToken, done) {
    console.log('foi');
    User.findOne({ where: { id: jwtToken.id } })
        .then((user: User | null) => {
            if (user) {
                return done(null, user , jwtToken);
            } else {
                return done(null, false);
            }
        })
        .catch((err: Error) => { return done(err, false) })
};

passport.use(new Strategy(options, verifyCallback));
