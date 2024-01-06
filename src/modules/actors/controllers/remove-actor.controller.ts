import { Request, Response } from "express";
import { RemoveActorService } from "../services/remove-actor.service";
import { ActorRepository } from "../repositories/actor.repository";

export class DestroyActorController {
    constructor(private readonly service: RemoveActorService,
                private readonly actorRepository: ActorRepository) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const actor = await this.actorRepository.findById(Number(id));
        if (!actor) {
            return res.status(404).json({ message: "Actor not found" });
        }
        await this.service.execute(Number(id));
        return res.json({ message: "Actor deleted" });
    }
}
