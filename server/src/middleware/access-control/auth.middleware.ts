import { NextFunction, Request, Response } from "express";
import { User } from "../../models";
import createError from "http-errors";

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.isAuthenticated())
        throw new Error("401::You need to login to view this resource");
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
