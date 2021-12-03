/* eslint-disable prettier/prettier */
import NotificationRepository from "@modules/Notification/repositories/interfaces/NotificationRepository";
import UserRepository from "@modules/Notification/repositories/interfaces/UserRepository";
import { Request, Response } from "express";
import IoServer from "../../interfaces/IoServer";
import SendNotificationByUsers from "../../useCases/SendNotificationByUsers";


export default class NotificationsController {
    private userRepository: UserRepository;

    private notificationRepository: NotificationRepository;

    private ioServer: IoServer;

    constructor(
        userRepository: UserRepository,
        notificationRepository: NotificationRepository,
        ioServer: IoServer,
    ) {
        this.userRepository = userRepository;
        this.notificationRepository = notificationRepository;
        this.ioServer = ioServer;
    }

    public async createNotificationByUsers(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { action, description, signedTo, title } = request.body;
        const sendNotificationByUsers = new SendNotificationByUsers(
            this.notificationRepository,
            this.userRepository,
            this.ioServer,
        );
        await sendNotificationByUsers.execute({
            action,
            createdAt: new Date(),
            description,
            signedTo,
            title,
        });

        return response.status(201).json({ code: 201, message: "Created" });
    }
}
