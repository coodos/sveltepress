import { SessionModel } from "@/models/session.model";
import { UserModel } from "@/models/user.model";

declare global {
	namespace Express {
		interface User extends UserModel {}
		interface Session extends SessionModel {}

		interface Request {
			user?: User;
			session?: Session;
		}
	}
}
