import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../user.repository";
import { UserPrismaMapping } from "../../mappings/user.prisma.mapping";

export class PrismaUserRepository implements UserRepository {
  private prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(data: UserEntity): Promise<void> {
    try {
      const user = UserPrismaMapping.from(data);
      await this.prisma.users.create({ data: user });
    } catch (error) {
      throw new Error("Error on create user");
    }
  }
  async findById(id: number): Promise<UserEntity> {
    try {
      const user = await this.prisma.users.findUnique({ where: { id } });
      if (!user) {
        throw new Error("User not found");
      }
      return UserPrismaMapping.to(user);
    } catch (error) {
      throw new Error("Error on find user");
    }
  }
  async find(): Promise<UserEntity[]> {
    try {
      const users = await this.prisma.users.findMany();
      return users.map(user => UserPrismaMapping.to(user));
    } catch (error) {
      console.error(error);
      throw new Error("Error on find users");
    }
  }
  async update(id: number, data: UserEntity): Promise<void> {
    try {
      const user = UserPrismaMapping.from(data);
      await this.prisma.users.update({ where: { id }, data: user });
    } catch (error) {
      throw new Error("Error on update user");
    }
  }
  async delete(id: number): Promise<void> {
    try {
      await this.prisma.users.delete({ where: { id } });
    } catch (error) {
      throw new Error("Error on delete user");
    }
  }
}
