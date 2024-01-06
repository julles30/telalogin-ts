import { ActorEntity } from "../../entities/actor.entity";
import { ActorRepository } from "../actor.repository";

export class ActorInMemoryRepository implements ActorRepository {
    private actors = Array<ActorEntity>();
    async create(data: ActorEntity): Promise<void> {
        this.actors.push(data);
    }
    async findById(id: number): Promise<ActorEntity> {
        const actor = this.actors.find(actor => actor.id === id);
        if (!actor) {
            throw new Error("Actor not found");
        }
        return actor;
    }
    async find(): Promise<ActorEntity[]> {
        return this.actors;
    }
    async findByMovie(movieId: number): Promise<ActorEntity[]> {
        return this.actors.filter(actor => actor.movieid === movieId);
    }
    async update(id: number, data: ActorEntity): Promise<void> {
        const actor = this.actors.find(actor => actor.id === id);
        if (!actor) {
            throw new Error("Actor not found");
        }
        const actorMod = { ...actor, ...data };
    }
    async delete(id: number): Promise<void> {
        const actor = this.actors.find(actor => actor.id === id);
        if (!actor) {
            throw new Error("Actor not found");
        }
        this.actors = this.actors.splice(this.actors.indexOf(actor), 1);
    }
}
