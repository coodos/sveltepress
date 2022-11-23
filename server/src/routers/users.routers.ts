import { Router } from "express";
import passport from "passport";
import { createUser, getCurrentUser, indexUsers } from "@/controllers";
import { isAdministrator, isAuthenticated, useDto } from "@/middleware";
import { CreateUserDto } from "@/validators";

const router = Router();

router
    .route("/")
    .post(useDto(CreateUserDto), createUser)
    .get(isAuthenticated, isAdministrator, indexUsers);

router.route("/login").post(passport.authenticate("local"), getCurrentUser);

export default router;
