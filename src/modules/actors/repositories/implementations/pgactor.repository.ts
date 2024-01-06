import { ActorEntity } from "../../entities/actor.entity";
import { ActorRepository } from "../actor.repository";

export class PGActorRepository implements ActorRepository {
  async create(data: ActorEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(id: number): Promise<ActorEntity> {
    throw new Error("Method not implemented.");
  }
  async find(): Promise<ActorEntity[]> {
    throw new Error("Method not implemented.");
  }
  async findByMovie(movieId: number): Promise<ActorEntity[]> {
    throw new Error("Method not implemented.");
  }
  async update(id: number, data: ActorEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
