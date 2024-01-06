import { ActorEntity } from "../entities/actor.entity";
import { actors } from "@prisma/client";

export class ActorPrismaMapping {
    static to(actor: actors): ActorEntity {
        return {
            id: actor.id,
            name: actor.name,
            age: actor.age || 0,
            movieid: actor.movieid
        }
    }

    static from(actor: ActorEntity): actors {
        return {
            id: actor.id,
            name: actor.name,
            age: actor.age,
            movieid: actor.movieid
        }
    }
}
