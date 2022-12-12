import { SessionsService, UsersService } from "@/services";
import { createJsonWebToken, validateJsonWebToken } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const userDeserializer = async (req: Request, res: Response, next: NextFunction) => {
	const { accessToken, refreshToken } = req.cookies;

	if (!accessToken) return next();

	const { payload, expired } = validateJsonWebToken(accessToken);

	if (payload) {
		req.session = payload;
		req.user = await UsersService.findById(payload.userId);
		return next();
	}

	const { payload: refresh } =
		!expired && refreshToken ? validateJsonWebToken(refreshToken) : { payload: null };
	if (!refresh) return next();
	const { id, userId } = await SessionsService.findOne({ id: refresh.sessionId });

	if (!userId) return next();
	const token = createJsonWebToken({ userId, id });

	res.cookie("accessToken", token, {
		maxAge: 60 * 60 * 1000,
		httpOnly: true
	});

	req.session = validateJsonWebToken(token).payload;
	req.user = await UsersService.findById(userId);

	return next();
};
