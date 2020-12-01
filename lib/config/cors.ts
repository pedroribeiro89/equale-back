import {CorsOptions} from "cors";

export const corsConfig: CorsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    preflightContinue: false
};
