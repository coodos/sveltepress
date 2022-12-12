import { ModelService } from "./model.service";
import { Session, User } from "@/models";

export const UsersService = new ModelService(User);
export const SessionsService = new ModelService(Session);
