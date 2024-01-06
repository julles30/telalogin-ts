import { ActorRepository } from "../repositories/actor.repository";

export class RemoveActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(id: number): Promise<void> {
    await this.actorRepository.delete(id);
  }
}
