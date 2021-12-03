import NotificationDTOInput from "@modules/Notification/application/dtos/NotificationDTOInput";
import Action from "@modules/Notification/domain/entities/Action";
import Notification from "@modules/Notification/domain/entities/Notification";
import NotificationRepository from "@modules/Notification/repositories/interfaces/NotificationRepository";
import UserRepository from "@modules/Notification/repositories/interfaces/UserRepository";
import IoServer from "../interfaces/IoServer";

export default class SendNotificationByUsers {
    constructor(
        readonly notificationRepository: NotificationRepository,
        readonly userRepository: UserRepository,
        readonly ioServer: IoServer,
    ) { }

    public async execute({
        action,
        createdAt = new Date(),
        description,
        signedTo,
        title,
    }: NotificationDTOInput): Promise<void> {
        const users = await this.userRepository.findByIdIn(
            signedTo.userId as number[],
        );
        const notification = new Notification(title, description, createdAt);
        users.forEach(user => notification.addReceiver(user));
        notification.addAction(
            new Action(
                action.url as string,
                action.title as string,
                action.description as string,
                action.attachFile as string,
                action.attachDescription as string,
            ),
        );
        await this.notificationRepository.create(notification);
        await this.ioServer.send("new_message", notification);
    }
}
