import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import { config } from "./config";
import { ConnectionHelper } from "./helpers/connectionHelper";
import { IUser } from "./interfaces/IUser";
import router from "./routes";
declare module "express-session" {
    interface SessionData {
        userId: string;
    }
}

interface Locals {
    user: IUser;
}

declare module "express" {
    export interface Response {
        locals: Locals;
    }
}

export class Api {
    public static app: express.Express = express();

    public static async RunApp() {
        await ConnectionHelper.connect();

        // Configure Express App
        Api.app.set("trust proxy", 1);
        Api.app.use(express.json());
        Api.app.use(express.urlencoded({ extended: true }));

        Api.app.use(
            session({
                name: "coinwalletid",
                store: MongoStore.create({
                    clientPromise: ConnectionHelper.getNativeClient(),
                }),
                saveUninitialized: false,
                resave: false,
                secret: config.secretKey,
                cookie: {
                    maxAge: 1000 * 60 * 60 * 2,
                    sameSite: true,
                    secure: process.env.NODE_ENV === "production",
                },
            })
        );

        Api.app.use("/", router);

        return Api.app;
    }
}