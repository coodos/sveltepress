import { ALLOWED_ORIGINS } from "@/config";

const origin = ALLOWED_ORIGINS.split(",").map((e) => e.trim());

export const corsConfig = {
	origin,
	credentials: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "token", "Authorization"]
};
