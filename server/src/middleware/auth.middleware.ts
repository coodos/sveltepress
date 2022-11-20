import Passport from "passport";
import { Strategy, IVerifyOptions } from "passport-local";
import { Identifier } from "sequelize";
import { User } from "../models";

export const initPassport = (passport: typeof Passport) => {
    const authenticate = async (
        email: string,
        password: string,
        cb: (error: any, user?: any, options?: IVerifyOptions) => void
    ) => {
        const user = await User.findOne({ where: { email } }).catch((err) =>
            cb(new Error(err))
        );
        if (!user) return cb(new Error("404::user not found"));
        const compareResult = await user.validateCredentials(password);
        if (compareResult) {
            return cb(null, user);
        } else {
            cb(new Error("400::invalid credentials"));
        }
    };

    passport.use(new Strategy({ usernameField: "email" }, authenticate));

    passport.serializeUser((user, cb) => {
        // @ts-ignore
        return cb(null, user.id);
    });

    passport.deserializeUser(async (id: Identifier, cb) => {
        const user = await User.findByPk(id).catch((err) => cb(null, null));
        if (!user) return cb(null, null);
        return cb(null, user);
    });
};
