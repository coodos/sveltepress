import { Router } from "express";
import usersRouter from "./users.routers";

const router = Router();

router.use("/users", usersRouter);

export { router };
