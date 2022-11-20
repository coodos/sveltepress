import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const {
    PORT,
    DB_PORT,
    DB_HOST,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    LOG_PATH,
    LOG_LEVEL,
} = process.env;

export {
    PORT,
    DB_HOST,
    DB_NAME,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    LOG_LEVEL,
    LOG_PATH,
};
