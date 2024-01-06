import { ActorEntity } from "../entities/actor.entity";
import { ActorRepository } from "../repositories/actor.repository";

export class FindOneActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(id: number): Promise<ActorEntity> {
    const actor = await this.actorRepository.findById(id);
    return actor;
  }
}
