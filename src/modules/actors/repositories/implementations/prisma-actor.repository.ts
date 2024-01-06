import { PrismaClient } from "@prisma/client";
import { ActorEntity } from "../../entities/actor.entity";
import { ActorRepository } from "../actor.repository";
import { ActorPrismaMapping } from "../../mappings/actor.prisma.mapping";

export class PrismaActorRepository implements ActorRepository {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async create(data: ActorEntity): Promise<void> {
        try {
            const actor = ActorPrismaMapping.from(data);
            await this.prisma.actors.create({ data: actor });
        } catch (error) {
            throw new Error("Error on create actor");
        }
    }
    async findById(id: number): Promise<ActorEntity> {
        try {
            const actor = await this.prisma.actors.findUnique({ where: { id } });
            if (!actor) {
                throw new Error("Actor not found");
            }
            return ActorPrismaMapping.to(actor);
        } catch (error) {
            throw new Error("Error on find actor");
        }
    }
    async find(): Promise<ActorEntity[]> {
        try {
            const actors = await this.prisma.actors.findMany();
            return actors.map(actor => ActorPrismaMapping.to(actor));
        } catch (error) {
            console.error(error);
            throw new Error("Error on find actors");
        }
    }
    async findByMovie(movieId: number): Promise<ActorEntity[]> {
        try {
            const actors = await this.prisma.actors.findMany({ where: { movieid: movieId } });
            return actors.map(actor => ActorPrismaMapping.to(actor));
        } catch (error) {
            console.error(error);
            throw new Error("Error on find actors by movie");
        }
    }
    async update(id: number, data: ActorEntity): Promise<void> {
        try {
            const actor = ActorPrismaMapping.from(data);
            await this.prisma.actors.update({ where: { id }, data: actor });
        } catch (error) {
            throw new Error("Error on update actor");
        }
    }
    async delete(id: number): Promise<void> {
        try {
            await this.prisma.actors.delete({ where: { id } });
        } catch (error) {
            throw new Error("Error on delete actor");
        }
    }
}
