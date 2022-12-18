import { FILTER_KEYS } from "@/config";
import { sanitizeObject } from "@/utils";
import { responseHandler } from "express-intercept";

export const AppInterceptor = responseHandler().replaceBuffer((body, req) => {
	if (!req.headers.accept.includes("application/json")) return body;

	const sanitizedObject = sanitizeObject(
		JSON.parse(body.toString()),
		FILTER_KEYS.split(",").map((e) => e.trim())
	);

	return Buffer.from(JSON.stringify(sanitizedObject));
});
