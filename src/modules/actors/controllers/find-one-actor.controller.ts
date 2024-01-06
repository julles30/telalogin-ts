import { Request, Response } from "express";
import { FindOneActorService } from "../services/find-one-actor.service";
import { ActorDTO } from "../dtos/actor.dto";

export class FindOneActorController {
    constructor(private readonly service: FindOneActorService) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const actor: ActorDTO = await this.service.execute(Number(id));
        if (!actor) {
            return res.status(404).json({ message: "Actor not found" });
        }
        return res.json(actor);
    }
}
