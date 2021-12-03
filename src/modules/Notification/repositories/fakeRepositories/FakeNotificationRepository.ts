import Notification from "@modules/Notification/domain/entities/Notification";
import NotificationRepository from "../interfaces/NotificationRepository";

export default class FakeNotificationRepository
    // eslint-disable-next-line prettier/prettier
    implements NotificationRepository {

    private notifications: Notification[];

    constructor() {
        this.notifications = [];
    }

    public async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }

    public async findAll(): Promise<Notification[] | undefined> {
        return Array.from(this.notifications);
    }
}
