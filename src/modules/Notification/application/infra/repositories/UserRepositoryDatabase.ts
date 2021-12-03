import User from "@modules/Notification/domain/entities/User";
import UserRepository from "@modules/Notification/repositories/interfaces/UserRepository";

export default class UserRepositoryDatabase implements UserRepository {
    findById(id: number): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }

    findByIdIn(params: any): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}
