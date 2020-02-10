import {CorsOptions} from "cors";

export const corsConfig: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    preflightContinue: false
};
