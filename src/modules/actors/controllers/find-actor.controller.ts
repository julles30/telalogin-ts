import { Request, Response } from "express";
import { FindActorService } from "../services/find-actor.service";
import { ActorDTO } from "../dtos/actor.dto";

export class FindActorController {
    constructor(private readonly service: FindActorService) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const actors: ActorDTO[] = await this.service.execute();
        return res.json(actors);
    }
}
