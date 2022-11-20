import { Router } from "express";
import passport from "passport";
import { createUser, getCurrentUser, indexUsers } from "../controllers";
import {
    isAdministrator,
    isAuthenticated,
} from "../middleware/access-control/auth.middleware";

const router = Router();

router
    .route("/")
    .post(createUser)
    .get(isAuthenticated, isAdministrator, indexUsers);

router.route("/login").post(passport.authenticate("local"), getCurrentUser);

export default router;
