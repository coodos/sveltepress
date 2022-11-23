import { NextFunction, Request, Response } from "express";
import { User } from "../../models";
import createError from "http-errors";

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.isAuthenticated()) createError(401, "Bad session/missing token");
    next();
};

export const isAdministrator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user.isSuperUser) throw new Error("404::Resource not found");
    next();
};
