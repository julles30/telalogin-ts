import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../user.repository";

export class PGUserRepository implements UserRepository {
  async create(data: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(id: number): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async find(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  async update(id: number, data: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
