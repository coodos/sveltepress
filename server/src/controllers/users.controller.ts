import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UsersService } from "@/services";

export const createUser = asyncHandler(async (req, res) => {
    const user = await UsersService.create({ ...req.body });
    res.json(user);
});

export const getCurrentUser = asyncHandler(
    async (req: Request, res: Response) => {
        res.json(req.user);
    }
);

export const indexUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await UsersService.findMany({});
    res.json(users);
});
