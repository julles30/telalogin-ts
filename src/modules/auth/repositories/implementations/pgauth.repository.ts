import { UserEntity } from "../../../users/entities/user.entity";
import { UserPrismaMapping } from "../../../users/mappings/user.prisma.mapping";
import { AuthRepository } from "../auth.repository";
import { PrismaClient } from "@prisma/client";

export class PrismaAuthRepository implements AuthRepository {
  private prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async auth(username: string, password: string): Promise<UserEntity> {
    try {
      const user = await this.prisma.users.findFirstOrThrow({
        where: { username, password },
      });
      return UserPrismaMapping.to(user);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async verifyExists(username: string): Promise<UserEntity> {
    try {
      const user = await this.prisma.users.findUniqueOrThrow({
        where: { username: username },
      });
      return UserPrismaMapping.to(user);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
