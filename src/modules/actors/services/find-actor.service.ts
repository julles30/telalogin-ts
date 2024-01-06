import { ActorEntity } from "../entities/actor.entity";
import { ActorRepository } from "../repositories/actor.repository";

export class FindActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(): Promise<ActorEntity[]> {
    const actors = await this.actorRepository.find();
    return actors;
  }
}
