import { Server } from "socket.io";
import http from "http";
import IoServer from "../interfaces/IoServer";

export default class IOSocketAdapter implements IoServer {
    private io: Server;

    constructor(server: http.Server) {
        this.io = new Server(server, {
            cors: {
                origin: "*",
            },
        });
        this.on();
    }

    public on(): void {
        this.io.on("connection", socket => {
            console.log(`Usuario conectado no socket ${socket.id}`);
        });
    }

    public async send(event: string, data: any): Promise<void> {
        await this.io.emit(event, data);
    }
}
