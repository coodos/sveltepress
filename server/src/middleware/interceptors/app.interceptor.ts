import { FILTER_KEYS } from "@/config";
import { sanitizeObject } from "@/utils";
import { NextFunction, Request, Response } from "express";
import { Hijack } from "express-multi-hijack";

export const AppInterceptor = Hijack({
    json: true,
    handler: (
        body: object | object[],
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (
            String(res.getHeader("Content-Type")).includes("application/json")
        ) {
            res.json(sanitizeObject(body, FILTER_KEYS.split(",")));
        } else {
            next();
        }
    },
});
