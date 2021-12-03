export default interface IoServer {
    send(event: string, data: any): Promise<void>;
    on(): void;
}
