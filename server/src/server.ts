import express from "express";
import passport from "passport";
import { PORT, SessionConfig } from "./config";
import { Logger } from "./utils";
import { db } from "./models";
import { router } from "./routers";
import { initPassport } from "./middleware";

const app = express();
initPassport(passport);

app.use(express.json());
app.use(SessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.listen(PORT, async () => {
    await db.authenticate();
    await db.sync();
    Logger.info(`Server started on port ${PORT} 🚀`);
    Logger.info(`Database connection instantiated`);
});
