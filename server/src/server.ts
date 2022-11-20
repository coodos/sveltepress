import express from "express";
import { PORT } from "./config";
import { Logger } from "./utils";

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    Logger.info(`Server started on port ${PORT} 🚀`);
});
