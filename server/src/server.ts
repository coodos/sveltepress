import express from "express";
import { PORT } from "./config";
import { Logger } from "./utils";
import { db } from "./models";

const app = express();
app.use(express.json());

app.listen(PORT, async () => {
    await db.authenticate();
    await db.sync();
    Logger.info(`Server started on port ${PORT} 🚀`);
    Logger.info(`Database connection instantiated`);
});
