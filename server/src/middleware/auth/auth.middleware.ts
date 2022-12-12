import { UsersService } from "@/services";
import { createJsonWebToken, validateJsonWebToken } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const userDeserializer = async (req: Request, res: Response, next: NextFunction) => {
	const { accessToken, refreshToken } = req.cookies;

	if (!accessToken) next();

	const { payload, expired } = validateJsonWebToken(accessToken);

	if (payload) {
		req.user = await UsersService.findById(payload.id);
		next();
	}

	const { payload: refresh } =
		expired && refreshToken ? validateJsonWebToken(refreshToken) : { payload: null };
	const session = getSession(refresh.sessionId);

	if (!session) return next();
	const token = createJsonWebToken(session);

	res.cookie("accessToken", token, {
		maxAge: 60 * 60 * 1000,
		httpOnly: true
	});

	return next();
};
