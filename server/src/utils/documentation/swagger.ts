import swaggerJsdoc from "swagger-jsdoc";
import { version, name } from "../../../package.json";

const swaggerOptions: swaggerJsdoc.Options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: name,
			version
		},
		components: {
			securitySchemas: {
				cookieAuth: {
					type: "apiKey",
					in: "cookie",
					name: "connect.sid"
				}
			}
		},
		security: [
			{
				cookieAuth: []
			}
		]
	},
	apis: ["./src/routers/*.ts", "./src/validators/*.ts"]
};

export const swaggerSpecification = swaggerJsdoc(swaggerOptions);
