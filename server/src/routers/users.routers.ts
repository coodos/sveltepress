import { Router } from "express";
import { createUser, getCurrentUser, loginUser, logoutUser, updateUser } from "@/controllers";
import { isAuthenticated, useDto } from "@/middleware";
import { CreateUserDto, UpdateUserDto } from "@/validators";

const router = Router();

/**
 * @openapi
 * "/api/users":
 *
 *   get:
 *     tags:
 *       - Users
 *     summary: get the currently signed in user
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success, returns the currently signed in user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserResponse"
 *       401:
 *         description: Unauthorized, happens when the user is not signed in
 *       500:
 *         description: Internal server error occurred
 *
 *   post:
 *     tags:
 *       - Users
 *     summary: create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: "#/components/schemas/CreateUserDto"
 *     responses:
 *       201:
 *         description: Successful, new user created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserResponse"
 *       400:
 *         description: Bad Request, data provided was bad
 *       500:
 *         description: Internal Server error occurred
 *
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update the currently signed in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: "#/components/schemas/UpdateUserDto"
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       202:
 *         description: Accepted, updated succeeded
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserResponse"
 *       400:
 *         description: Bad request, invalid or missing fields
 *       401:
 *         description: Unauthorized, user needs to be logged in to update their profile
 *       403:
 *         description: Forbidden, do not try to update another profile
 *       500:
 *         description: Internal server error
 *
 * "/api/users/login":
 *   post:
 *     tags:
 *       - Users
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: "#/components/schemas/LoginUserDto"
 *     responses:
 *       200:
 *         description: Successful, logged in user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserResponse"
 *       400:
 *         description: Bad Request, bad credentials
 *       500:
 *         description: Internal Server Error
 *
 * "/api/users/logout":
 *   get:
 *     tags:
 *       - Users
 *     summary: Logout a user
 *     responses:
 *       200:
 *         description: Successful, logged out user
 *       401:
 *         description: Unauthorized, user isn't logged in the first place
 *       500:
 *         description: Internal Server Error
 *
 */
router
	.route("/")
	.post(useDto(CreateUserDto), createUser)
	.get(isAuthenticated, getCurrentUser)
	.patch(isAuthenticated, useDto(UpdateUserDto), updateUser);

router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticated, logoutUser);

export default router;
