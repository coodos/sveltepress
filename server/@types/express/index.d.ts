import { UserModel } from "../../src/models/user.model";

declare global {
    namespace Express {
        interface User extends UserModel {}
    }
}
