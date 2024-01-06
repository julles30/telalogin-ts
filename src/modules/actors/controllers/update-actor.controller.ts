import { Request, Response } from "express";
import { UpdateActorService } from "../services/update-actor.service";
import { ActorDTO } from "../dtos/actor.dto";

export class UpdateActorController {
    constructor(private readonly service: UpdateActorService) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const newActor = <ActorDTO>req.body;
        await this.service.execute(Number(id), newActor);
        return res.json({ message: "Actor updated" });
    }
}
