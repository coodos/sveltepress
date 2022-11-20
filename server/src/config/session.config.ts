import { SESSION_SECRET } from "./env.config";
import { db } from "../models";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";

const DbStore = SequelizeStore(session.Store);

export const SessionConfig = session({
    secret: SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    store: new DbStore({ db }),
});
