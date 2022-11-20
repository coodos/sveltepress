import { Router } from "express";
import passport from "passport";
import { createUser, getCurrentUser } from "../controllers";

const router = Router();

router.route("/").post(createUser);

router.route("/login").post(passport.authenticate("local"), getCurrentUser);

export default router;
