import express from "express";
import passport from "passport";
import { PORT, SessionConfig } from "./config";
import { Logger, initPassport } from "./utils";
import { db } from "./models";
import { router } from "./routers";
import { ExpressErrorHandler } from "./middleware/handlers/error.handler";

const app = express();
initPassport(passport);

app.use(express.json());
app.use(SessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.use(ExpressErrorHandler);

app.listen(PORT, async () => {
    await db.authenticate();
    /**
     * Do not for fuck's sake set force to true, EVER,
     * this is the `$ sudo rm -rf /*` equivalent to SQL
     */
    await db.sync({ force: false });
    Logger.info(`Server started on port ${PORT} 🚀`);
    Logger.info(`Database connection instantiated 🤠`);
});
