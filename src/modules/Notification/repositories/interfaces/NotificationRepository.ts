import Notification from "@modules/Notification/domain/entities/Notification";

export default interface NotificationRepository {
    create(notification: Notification): Promise<void>;
    findAll(): Promise<Notification[] | undefined>;
}
