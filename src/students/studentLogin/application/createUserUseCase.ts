import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { ValidationCreateUser } from "../domain/validator/validationUser";
import { validate } from "class-validator";

export class CreateUserUserCase {
    constructor(readonly userRepository: UserRepository) { }

    async create(
        name: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<User | null> {
        let validationUser = new ValidationCreateUser(name, lastName, email, password);
        const validation = await validate(validationUser);

        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const createUser = await this.userRepository.createUser(
                name,
                lastName,
                email,
                password,
            );
            return createUser;
        } catch (error) {
            return null;
        }
    }
}