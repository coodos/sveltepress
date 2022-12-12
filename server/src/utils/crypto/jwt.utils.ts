import { SESSION_SECRET } from "@/config";
import jwt from "jsonwebtoken";

export const createJsonWebToken = (
	payload: Record<string, unknown>,
	expiresIn: string | number = "1h"
) => {
	return jwt.sign(payload, SESSION_SECRET, { expiresIn });
};

export const validateJsonWebToken = (token: string) => {
	try {
		const payload = jwt.verify(token, SESSION_SECRET);
		return { payload, expired: false };
	} catch (error) {
		return { payload: null, expired: error.message.includes("token expired") };
	}
};
