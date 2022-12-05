import express from "express";
import passport from "passport";
import { METRICS_PORT, PORT, SessionConfig } from "@/config";
import { Logger, initPassport, initRestMetrics, initMetricsServer } from "@/utils";
import { db } from "@/models";
import { router } from "@/routers";
import { AppInterceptor, ExpressErrorHandler, corsConfig } from "@/middleware";

const app = express();
initPassport(passport);

app.use(express.json());
app.use(corsConfig);
app.use(SessionConfig);
app.use(passport.initialize());
app.use(passport.session());
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
