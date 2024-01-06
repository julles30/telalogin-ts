import { Request, Response } from "express";
import { CreateActorService } from "../services/create-actor.service";
import { ActorDTO } from "../dtos/actor.dto";

export class CreateActorController {
    constructor(private readonly service: CreateActorService) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const actor = <ActorDTO>req.body;
        await this.service.execute(actor);
        return res.json({ message: "Actor created" });
    }
}
