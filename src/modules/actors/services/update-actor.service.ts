import { ActorDTO } from "../dtos/actor.dto";
import { ActorMapping } from "../mappings/actor.mapping";
import { ActorRepository } from "../repositories/actor.repository";

export class UpdateActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(id: number, data: ActorDTO): Promise<void> {
    const actor = ActorMapping.from(data);
    await this.actorRepository.update(id, actor);
  }
}
