import express from "express";
import { PORT } from "./config";
import { Logger } from "./utils";
import { db } from "./models";
import { router } from "./routers";

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(PORT, async () => {
    await db.authenticate();
    await db.sync();
    Logger.info(`Server started on port ${PORT} 🚀`);
    Logger.info(`Database connection instantiated`);
});
