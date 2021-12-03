import sinon from "sinon";
import IOSocketAdapter from "@modules/Notification/application/infra/IOSocketAddapter";
import User from "@modules/Notification/domain/entities/User";
import Action from "@modules/Notification/domain/entities/Action";
import Notification from "@modules/Notification/domain/entities/Notification";
import {
    serverHttp,
    io,
} from "@modules/Notification/application/infra/Fakes/FakeServer";

describe("IoServer", () => {
    beforeAll(async () => {
        await serverHttp.listen(3000);
    });

    it("should send a message by users", async () => {
        const receiver = new User(1, "123456", "123456", "analista");
        const action = new Action("any.com.br", "any", "any", "any", "any");
        const notification = new Notification("any", "any", new Date(), false);
        notification.addReceiver(receiver);
        notification.addAction(action);
        const ioSocket = new IOSocketAdapter(io);
        await ioSocket.send("message", notification);
    });
});
