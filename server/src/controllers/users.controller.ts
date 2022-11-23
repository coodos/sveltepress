import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UsersService } from "@/services";

export const createUser = asyncHandler(async (req, res) => {
    const { email, password }: { email: string; password: string } = req.body;
    if (!(email && password)) {
        throw new Error("aww man");
    }
    const user = await UsersService.create({ email, password });
    user.isSuperUser;
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
