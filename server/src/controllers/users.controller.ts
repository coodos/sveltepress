import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UsersService } from "@/services";
import { createJsonWebToken, validateJsonWebToken } from "@/utils";

export const createUser = asyncHandler(async (req, res) => {
	const user = await UsersService.create({ ...req.body });
	res.status(201).json(user);
});

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const user = await UsersService.findOne({ email });
	if (!(await user.validateCredentials(password))) throw new Error("400::Bad credentials");
	const token = createJsonWebToken({ id: user.id });
	res.cookie("accessToken", token, {
		maxAge: 60 * 60 * 1000,
		httpOnly: true
	});
	res.cookie("refreshToken", token, {
		maxAge: 60 * 60 * 24 * 1000 * 365,
		httpOnly: true
	});

	res.json(validateJsonWebToken(token).payload);
});

export const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {
	res.json(req.user);
});

export const indexUsers = asyncHandler(async (req: Request, res: Response) => {
	const users = await UsersService.findMany({});
	res.json(users);
});

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
	res.cookie("accessToken", "", {
		maxAge: 0,
		httpOnly: true
	});

	res.json({});
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
	for (const key of Object.keys(req.body)) {
		req.user[key] = req.body[key] ?? req.user[key];
	}
	await req.user.save();
	res.status(202).json(req.user);
});
