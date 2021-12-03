import User from "@modules/Notification/domain/entities/User";

export default interface UserRepository {
    findById(id: number): Promise<User | undefined>;
    findByIdIn(params: any): Promise<User[]>;
}
