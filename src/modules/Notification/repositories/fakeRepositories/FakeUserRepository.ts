/* eslint-disable prettier/prettier */
import User from "@modules/Notification/domain/entities/User";
import UserRepository from "@modules/Notification/repositories/interfaces/UserRepository";
import USERS from "../mocks/users-valid";

export default class FakeUserRepository implements UserRepository {
    public async findByIdIn(ids: number[]): Promise<User[]> {
        const users: User[] = [];
        ids.forEach(id => {
            const data = USERS.find(user => id === user.userId);
            if (data) {
                users.push(new User(
                    data.userId,
                    data.clientId,
                    data.convenioId,
                    data.profile,
                ));
            }
        });
        return users;
    }

    public async findById(
        id: number,
    ): Promise<User | undefined> {
        const data = USERS.find(user => id === user.userId);
        return !data
            ? undefined
            : new User(
                data.userId,
                data.clientId,
                data.convenioId,
                data.profile,
            );
    }
}
