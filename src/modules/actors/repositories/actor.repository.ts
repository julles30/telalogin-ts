import { ActorEntity } from '../entities/actor.entity';

export interface ActorRepository {
  create(data: ActorEntity): Promise<void>;
  findById(id: number): Promise<ActorEntity>;
  find(): Promise<ActorEntity[]>;
  findByMovie(movieId: number): Promise<ActorEntity[]>;
  update(id: number, data: ActorEntity): Promise<void>;
  delete(id: number): Promise<void>;
}
