import { FindActorService } from "../find-actor.service";
import { ActorInMemoryRepository } from "../../repositories/implementations/actor-in-memory.repository";
import { expect, test } from 'vitest';

const repository = new ActorInMemoryRepository();

const service = new FindActorService(repository);

test('return []', async () => {
  // Criar um ator

  expect(await service.execute()).toStrictEqual([{
    id: 1,
    name: "test",
    age: 30,
    movieid: 1
  }])
})
