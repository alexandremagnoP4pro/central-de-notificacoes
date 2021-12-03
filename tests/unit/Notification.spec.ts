import Action from "@modules/Notification/domain/entities/Action";
import Notification from "@modules/Notification/domain/entities/Notification";
import User from "@modules/Notification/domain/entities/User";

describe("Notification", () => {
    it("should add two receivers in a notification", () => {
        const receiver = new User(1, "123456", "123456", "analista");
        const notification = new Notification("any", "any", new Date(), false);
        notification.addReceiver(receiver);
        const receivers = notification.getReceivers();
        expect(receivers).toHaveLength(1);
    });

    it("should add a action in a notification", () => {
        const receiver = new User(1, "123456", "123456", "analista");
        const action = new Action("any.com.br", "any", "any", "any", "any");
        const notification = new Notification("any", "any", new Date(), false);
        notification.addReceiver(receiver);
        notification.addAction(action);
        const actionExpected = notification.getAction();
        expect(actionExpected).toEqual(action);
    });

    it("should return true if a notification was read", () => {
        const notification = new Notification("any", "any", new Date(), false);
        notification.setRead(true);
        const notificationWasRead = notification.getRead();
        expect(notificationWasRead).toEqual(true);
    });

    it("should return false if a notification was inactive", () => {
        const notification = new Notification("any", "any", new Date(), false);
        notification.setActive(false);
        const notificationActive = notification.getActive();
        expect(notificationActive).toEqual(false);
    });
});
