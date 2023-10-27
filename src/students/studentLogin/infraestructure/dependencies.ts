import { MysqlUserRepository } from "./mysqlUserRepository";

import { CreateUserUserCase } from "../application/createUserUseCase";
import { CreateUserController } from "./controllers/createUserController";

export const mysqlUserRepository = new MysqlUserRepository();

//Casos de uso
export const createUserUseCase = new CreateUserUserCase(mysqlUserRepository);

//Controladores
export const createUserController = new CreateUserController(createUserUseCase);