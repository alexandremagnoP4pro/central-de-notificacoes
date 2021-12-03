import SendNotificationByUsers from "@modules/Notification/application/useCases/SendNotificationByUsers";
import FakeNotificationRepository from "@modules/Notification/repositories/fakeRepositories/FakeNotificationRepository";
import FakeUserRepository from "@modules/Notification/repositories/fakeRepositories/FakeUserRepository";
import FakeSocketIOServer from "@shared/infra/fakes/SocketIOServer";

describe("Push Notification", () => {
    it("should push a notification", async () => {
        const input = {
            title: "any",
            action: {
                url: "any",
                title: "any",
                description: "any",
                attachFile: "any",
                attachDescription: "any",
            },
            description: "any",
            signedTo: {
                clientId: [123456],
                convenioId: [123456],
                userId: [1, 2],
                profile: ["any"],
            },
            createdAt: new Date(),
        };
        const userRepository = new FakeUserRepository();
        const notificationRepository = new FakeNotificationRepository();
        const ioServer = new FakeSocketIOServer();
        const sendNotificationByUsers = new SendNotificationByUsers(
            notificationRepository,
            userRepository,
            ioServer,
        );
        await sendNotificationByUsers.execute(input);
        const notifications = await notificationRepository.findAll();
        await expect(notifications).toHaveLength(1);
    });
});
