import Action from "./Action";
import User from "./User";

export interface CreateActionDTO {
    url?: string;
    modal?: {
        title?: string;
        description?: string;
        attachFile?: any;
        attachDescription?: string;
    };
}

export interface CreateSignedToDTO {
    // clientId: number[];
    // convenioId: number[];
    userId?: number[];
    profile?: string[];
}

export interface CreateNotificationDTO {
    readonly title: string;
    readonly receiver?: string;
    readonly profile?: string;
    readonly description: string;
    readonly createdAt: Date;
}

export default class Notification {
    private active: boolean;

    private read: boolean;

    private title: string;

    private description: string;

    private receivers: User[];

    private action: Action;

    private createdAt: Date;

    constructor(
        title: string,
        description: string,
        createdAt: Date = new Date(),
        read = false,
        active = true,
    ) {
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.read = read;
        this.active = active;
        this.receivers = [];
    }

    addReceiver(user: User): void {
        this.receivers.push(user);
    }

    getReceivers(): Array<User> {
        return Array.from(this.receivers) as User[];
    }

    addAction(action: Action) {
        this.action = action;
    }

    getAction(): Action {
        return this.action;
    }

    setRead(read: boolean): void {
        this.read = read;
    }

    getRead(): boolean {
        return this.read;
    }

    setActive(deleted: boolean): void {
        this.active = deleted;
    }

    getActive(): boolean {
        return this.active;
    }
}
