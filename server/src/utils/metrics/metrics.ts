import express, { Request, Response } from "express";
import promClient from "prom-client";
import responseTime from "response-time";
import { Logger } from "../logger/logger";

const app = express();

export const restResponseTimeHistogram = new promClient.Histogram({
	name: "rest_response_time_duration_seconds",
	help: "REST API response time in seconds",
	labelNames: ["method", "route", "status_code"]
});

export const databaseResponseTimeHistogram = new promClient.Histogram({
	name: "db_response_time_duration_seconds",
	help: "Database response time in seconds",
	labelNames: ["operation", "success"]
});

export function initMetricsServer(port: string | number) {
	const collectDefaultMetrics = promClient.collectDefaultMetrics;

	collectDefaultMetrics();

	app.get("/metrics", async (req, res) => {
		res.set("Content-Type", promClient.register.contentType);

		return res.send(await promClient.register.metrics());
	});

	app.listen(port, () => {
		Logger.info(`📊: Metrics server started at http://localhost:${port}/`);
	});
}

export const initRestMetrics = responseTime((req: Request, res: Response, time: number) => {
	if (req?.route?.path) {
		restResponseTimeHistogram.observe(
			{
				method: req.method,
				route: req.route.path,
				status_code: res.statusCode
			},
			time * 1000
		);
	}
});
