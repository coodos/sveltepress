import { Router } from "express";
import passport from "passport";
import {
    createUser,
    getCurrentUser,
    logoutUser,
    updateUser,
} from "@/controllers";
import { isAuthenticated, useDto } from "@/middleware";
import { CreateUserDto, UpdateUserDto } from "@/validators";

const router = Router();

router
    .route("/")
    .post(useDto(CreateUserDto), createUser)
    .get(isAuthenticated, getCurrentUser)
    .patch(isAuthenticated, useDto(UpdateUserDto), updateUser);

router.route("/login").post(passport.authenticate("local"), getCurrentUser);
router.route("/logout").get(isAuthenticated, logoutUser);

export default router;
