import { ActorDTO } from "../dtos/actor.dto";
import { ActorMapping } from "../mappings/actor.mapping";
import { ActorRepository } from "../repositories/actor.repository";

export class CreateActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(data: ActorDTO): Promise<void> {
    const actor = ActorMapping.from(data);
    const res = await this.actorRepository.create(actor);
  }
}
