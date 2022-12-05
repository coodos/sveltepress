/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserDto:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: foopass
 *
 *    LoginUserDto:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: foopass
 *
 *    UpdateUserDto:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: janice.doe@example.com
 *        password:
 *          type: string
 *          default: barpass
 *
 *    UserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        email:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateUserDto = {
	fields: {
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		}
	},
	mandatory: ["email", "password"]
};

export const UpdateUserDto = {
	fields: {
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		}
	},
	mandatory: []
};
