import pino from "pino";
import { LOG_LEVEL, LOG_PATH } from "../../config";
import fs, { PathLike } from "fs";

const streams = [
	{ stream: process.stdout },
	{ stream: fs.createWriteStream(LOG_PATH as PathLike, { flags: "a" }) }
];

export const Logger = pino(
	{
		level: LOG_LEVEL
	},
	pino.multistream(streams)
);
