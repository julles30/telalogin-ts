import { UserEntity } from "../../users/entities/user.entity";
import { AuthRepository } from "../repositories/auth.repository";

export class VerifyExistsService {
  constructor(private readonly repository: AuthRepository) {}
  async execute(username: string): Promise<UserEntity> {
    const usuario = await this.repository.verifyExists(username);
    return usuario;
  }
}