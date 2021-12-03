import { Request, Response, Router } from "express";
import NotificationsController from "@modules/Notification/application/infra/controllers/NotificationsController";

export default class Route {
    private notificationRoutes: Router;

    private controller: NotificationsController;

    constructor(controller: NotificationsController) {
        this.notificationRoutes = Router();
        this.controller = controller;
        this.instanceRoutes();
    }

    // TODO: Construir o auth da aplicação

    private instanceRoutes(): void {
        this.notificationRoutes.post(
            "/notificationsByUsers",
            this.controller.createNotificationByUsers,
        );

        this.notificationRoutes.get(
            "/healthcheck",
            (request: Request, response: Response) => {
                response.status(200).json({ status: "ok" });
            },
        );
    }

    public getRoutes(): Router {
        return this.notificationRoutes;
    }
}
