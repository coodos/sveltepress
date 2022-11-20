import { Router } from "express";
import { createUser } from "../controllers";

const router = Router();

router.route("/").post(createUser);

export default router;
