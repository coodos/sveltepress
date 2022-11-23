import { NextFunction, Request, Response } from "express";

interface IDto {
    fields: Record<string, Function>;
    mandatory: string[];
}

export const useDto = <T extends IDto>(dto: T) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const obj = {};
        for (const key of Object.keys(dto.fields)) {
            if (dto.fields[key](req.body[key])) {
                obj[key] = req.body[key];
            }
        }
        if (Object.keys(obj).length !== dto.mandatory.length) {
            const missed = [];
            for (const key of dto.mandatory) {
                if (!req.body[key]) missed.push(key);
            }
            throw new Error(
                `400::${missed.length > 1 ? "Fields" : "Field"} ${missed} ${
                    missed.length > 1 ? "are" : "is"
                } required.`
            );
        }
        req.body = obj;

        next();
    };
};
