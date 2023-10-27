import { query } from "../../../database/mysql";
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class MysqlUserRepository implements UserRepository {
    async createUser(
        name: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<User | null> {
        try {
            const sql = "INSERT INTO USERS (name, lastName, email, password) VALUES (?,?,?,?)";
            const params: any[] = [name, lastName, email, password];
            const result = await query(sql, params);
            return new User(result.id, name, lastName, email, password);
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the category. Please try again later.");
        }
    }

    updatePassword(userId: number, newPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    login(email: string, password: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}