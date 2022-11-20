import dotenv from "dotenv";
import path from "path";

const _path = path.resolve(__dirname, "../../.env");

dotenv.config({ path: _path });

const config = process;
const PORT = process.env.PORT as string;
const LOG_PATH = process.env.LOG_PATH as string;
const LOG_LEVEL = process.env.LOG_LEVEL as string;

export { PORT, LOG_LEVEL, LOG_PATH };
