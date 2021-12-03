import Notification from "@modules/Notification/domain/entities/Notification";
import NotificationRepository from "@modules/Notification/repositories/interfaces/NotificationRepository";

export default class NotificationRepositoryDatabase
    implements NotificationRepository {
    create(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<Notification[] | undefined> {
        throw new Error("Method not implemented.");
    }
}
