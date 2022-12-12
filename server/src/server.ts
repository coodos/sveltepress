import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { METRICS_PORT, PORT } from "@/config";
import { Logger, initRestMetrics, initMetricsServer } from "@/utils";
import { db } from "@/models";
import { router } from "@/routers";
import { ExpressErrorHandler, corsConfig, AppInterceptor } from "@/middleware";
import { userDeserializer } from "./middleware/auth/auth.middleware";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(userDeserializer);
app.use(cors(corsConfig));
app.use(initRestMetrics);

app.use(AppInterceptor);
app.use("/api", router);

app.use(ExpressErrorHandler);

app.listen(PORT, async () => {
	await db.authenticate();
	/**
	 * Do not for fuck's sake set force to true, EVER,
	 * this is the `$ sudo rm -rf /*` equivalent to SQL
	 */
	await db.sync({ force: false });
	initMetricsServer(METRICS_PORT);
	Logger.info(`📝: Serving docs on http://localhost:${PORT}/api/docs`);
	Logger.info(`🚀: Server started on http://localhost:${PORT}`);
	Logger.info("🤠: Database connection instantiated");
});
