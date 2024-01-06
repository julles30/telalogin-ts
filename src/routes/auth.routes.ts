import { Router, Request, Response } from "express";
import { loginController } from "../modules/auth"; // Importe o controlador de login do módulo de autenticação

const authRoutes = Router();

authRoutes.post("/auth/login", (req: Request, res: Response) => {
    loginController.handle(req, res);
});

export default authRoutes;
