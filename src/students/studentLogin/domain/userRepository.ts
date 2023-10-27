import { User } from "./user";

export interface UserRepository {

    createUser(
        name: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<User | null>;

    updatePassword(
        userId: number,
        newPassword: string
    ): Promise<boolean>;

    login(
        email: string,
        password: string
    ): Promise<User | null>;

}