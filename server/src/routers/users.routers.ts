import { Router } from "express";
import passport from "passport";
import { createUser, getCurrentUser, indexUsers } from "@/controllers";
import { isAdministrator, isAuthenticated, useDto } from "@/middleware";
import { User } from "@/models";
import { body, validationResult } from "express-validator";

const router = Router();

router
    .route("/")
    .post(, createUser)
    .get(isAuthenticated, isAdministrator, indexUsers);

router.route("/login").post(passport.authenticate("local"), getCurrentUser);

export default router;
