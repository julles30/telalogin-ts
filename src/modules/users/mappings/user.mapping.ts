import { UserDTO } from "../dtos/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserMapping {
  static from(user: UserDTO): UserEntity {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password
    }
  }

}