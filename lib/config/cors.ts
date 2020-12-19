import {CorsOptions} from "cors";

export const corsConfig: CorsOptions = {
    origin: [process.env.CORS_ORIGIN_PORTAL, process.env.CORS_ORIGIN_CHAT],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", 'Authorization'],
    credentials: true,
    preflightContinue: false
};
