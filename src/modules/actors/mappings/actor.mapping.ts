import { ActorDTO } from "../dtos/actor.dto";
import { ActorEntity } from "../entities/actor.entity";

export class ActorMapping {
    static from(actor: ActorDTO): ActorEntity {
        return {
            id: actor.id,
            name: actor.name,
            age: actor.age,
            movieid: actor.movieid
        }
    }
}
