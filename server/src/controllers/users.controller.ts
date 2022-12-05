import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UsersService } from "@/services";

export const createUser = asyncHandler(async (req, res) => {
	const user = await UsersService.create({ ...req.body });
	res.status(201).json(user);
});

export const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {
	res.json(req.user);
});

export const indexUsers = asyncHandler(async (req: Request, res: Response) => {
	const users = await UsersService.findMany({});
	res.json(users);
});

export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
	req.logout((err) => {
		if (err) throw new Error("500::Unable to logout, you're stuck with us");
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
