import { Response, Request } from "express";
import { CreateUserUserCase } from "../../application/createUserUseCase";

export class CreateUserController {
    constructor(readonly createUserUseCase: CreateUserUserCase) { }

    async create(req: Request, res: Response) {
        try {
            let { name, lastName, email, password } = req.body;

            const createUser = await this.createUserUseCase.create(
                name,
                lastName,
                email,
                password
            );

            if (createUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: createUser.name,
                        lastName: createUser.lastName,
                        email: createUser.email,
                        password: createUser.password,
                    },
                    message: "El usuario ha sido creada con éxito",

                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error al crear al usuario, intentelo mas tarde"
                });
            }

        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}