import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../user.repository";

export class UserInMemoryRepository implements UserRepository {
  private users = Array<UserEntity>();
  async create(data: UserEntity): Promise<void> {
    this.users.push(data);
  }
  async findById(id: number): Promise<UserEntity> {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
  async find(): Promise<UserEntity[]> {
    return this.users;
  }
  async update(id: number, data: UserEntity): Promise<void> {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error("User not found");
    }
    const userMod = { ...user, ...data };
  }
  async delete(id: number): Promise<void> {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error("User not found");
    }
    this.users = this.users.splice(this.users.indexOf(user), 1);
  }
}
