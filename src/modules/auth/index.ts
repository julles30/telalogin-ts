import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { PrismaAuthRepository } from "./repositories/implementations/pgauth.repository";

const authRepository = new PrismaAuthRepository();

const loginService = new AuthService(authRepository);
const loginController = new AuthController(loginService);

export {
  loginController
};
