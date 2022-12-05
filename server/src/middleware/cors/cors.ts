import { ALLOWED_ORIGINS } from "@/config";
import cors from "cors";

export const corsConfig = cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "token",
        "Authorization",
    ],
});
