interface Action {
    url?: string;
    modal?: {
        title?: string;
        description?: string;
        attachFile?: any;
        attachDescription?: string;
    };
}

interface SignedTo {
    clientId?: number[];
    convenioId?: number[];
    userId?: number[];
    profile?: string[];
}

export default interface NotificationDTOOutput {
    title: string;
    action: Action;
    description: string;
    active?: boolean;
    read?: boolean;
    signedTo: SignedTo;
    createdAt: Date;
    deletedAt?: Date;
}
