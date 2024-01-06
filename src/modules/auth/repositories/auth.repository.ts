import { Token } from "../entities/token.entity";
import { UserEntity } from "../../users/entities/user.entity";

export interface AuthRepository {
  auth(username: string, password: string): Promise<UserEntity>;
  verifyExists(username: string): Promise<UserEntity>;
}

