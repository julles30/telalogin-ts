import { ActorEntity } from "../entities/actor.entity";
import { ActorRepository } from "../repositories/actor.repository";

export class IndexByMovieActorService {
  constructor(
    private readonly actorRepository: ActorRepository
  ) { }
  async execute(movieId: number): Promise<ActorEntity[]> {
    const actors = await this.actorRepository.findByMovie(movieId);
    return actors;
  }
}
