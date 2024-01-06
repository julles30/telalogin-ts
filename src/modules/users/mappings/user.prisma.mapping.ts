import { UserEntity } from "../entities/user.entity";
import { users } from "@prisma/client";

export class UserPrismaMapping {
  static to(user: users): UserEntity {
    return {
      id: user.id,
      name: user.name ?? undefined,
      username: user.username,
      password: user.password
    }
  }

  static from(user: UserEntity): users {
    return {
      id: user.id,
      name: user.name ?? null,
      username: user.username,
      password: user.password
    }
  }
}
