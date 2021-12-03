import IoServer from "@modules/Notification/application/interfaces/IoServer";

export default class FakeSocketIOServer implements IoServer {
    on(): void {
        console.log(`Usuario conectado no socket`);
    }

    public async send(event: string, data: any): Promise<void> {
        console.log("event ", event);
        console.log("data ", data);
    }
}
