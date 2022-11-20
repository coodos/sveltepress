import asyncHandler from "express-async-handler";
import { User } from "../models";

export const createUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        throw new Error("aww man");
    }
    const user = await User.create({ email, password });
    res.json(user);
});
