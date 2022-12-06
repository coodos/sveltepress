import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (!req.isAuthenticated()) throw new Error("401::You need to login to view this resource");
	next();
};

export const isAdministrator = (req: Request, res: Response, next: NextFunction) => {
	if (!req.user.isSuperUser) throw new Error("404::Resource not found");
	next();
};
