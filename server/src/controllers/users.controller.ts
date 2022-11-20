import asyncHandler from "express-async-handler";
import { User } from "../models";
import { Request, Response } from "express";

export const createUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        throw new Error("aww man");
    }
    const user = await User.create({ email, password });
    res.json(user);
});

export const getCurrentUser = asyncHandler(
    async (req: Request, res: Response) => {
        res.json(req.user);
    }
);
