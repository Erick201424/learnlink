import express from "express";
import { createUserController } from "./dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post(
    "/create",
    createUserController.create.bind(createUserController));