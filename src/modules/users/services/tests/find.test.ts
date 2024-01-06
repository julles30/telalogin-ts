import { FindUserService } from "../find-user.service";
import { UserInMemoryRepository } from "../../repositories/implementations/user-in-memory.repository";
import { expect, test } from 'vitest';

const repository = new UserInMemoryRepository();

const service = new FindUserService(repository);

test('return []', async () => {
  //Criar um usuário

  expect(await service.execute()).toStrictEqual([{
    id: 1,
    name: "test",
    email: "test",
    password: "test",
  }])
})