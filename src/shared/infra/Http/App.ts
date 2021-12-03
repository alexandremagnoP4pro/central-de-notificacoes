import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import "reflect-metadata";
import NotificationsController from "@modules/Notification/application/infra/controllers/NotificationsController";
import AppError from "@shared/infra/errors/AppError";
import UserRepositoryDatabase from "@modules/Notification/application/infra/repositories/UserRepositoryDatabase";
import NotificationRepositoryDatabase from "@modules/Notification/application/infra/repositories/NotificationRepositoryDatabase";
import IOSocketAdapter from "@modules/Notification/application/infra/IOSocketAddapter";
import Route from "./Routes";
// import "@shared/infra/typeorm";
// import { errors } from "celebrate";

export default class App {
    private app: any;

    private route: any;

    private serverHttp: http.Server;

    private controller: NotificationsController;

    constructor() {
        this.app = express();
        this.serverHttp = http.createServer(this.app);
        this.controller = new NotificationsController(
            new UserRepositoryDatabase(),
            new NotificationRepositoryDatabase(),
            new IOSocketAdapter(this.serverHttp),
        );
        this.route = new Route(this.controller);
        this.setupMiddlewares();
    }

    private setupMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(this.route.getRoutes());
        // this.app.use(errors());
        this.app.use(this.errorHandler());
    }

    private errorHandler(): any {
        return (
            error: Error,
            request: Request,
            response: Response,
            next: NextFunction,
        ) => {
            if (error instanceof AppError) {
                return response
                    .status(error.statusCode)
                    .json({ status: "error", message: error.message });
            }
            console.error(error);
            return response.status(500).json({
                status: "error",
                message: "internal server error",
            });
        };
    }

    public listen(port = 3333): void {
        this.serverHttp.listen(port, () => {
            console.log(`server started on port ${port}`);
        });
    }
}
