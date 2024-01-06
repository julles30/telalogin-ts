import { AuthRepository } from "../repositories/auth.repository";
import { Token } from "../entities/token.entity";
import { UserEntity } from "../../users/entities/user.entity";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async execute(username: string, password: string): Promise<{ token: string, user: UserEntity }> {
    const user = await this.repository.auth(username, password);
    if (!user) {
      throw new Error("User not found");
    }
    const token = this.signToken({ id: user.id, username: user.username });
    return { token, user };
  }

  signToken(payload: { id: number, username: string }): string {
    return jwt.sign(payload, `${process.env.SECRET}`, { expiresIn: "1h" });
  }
}

