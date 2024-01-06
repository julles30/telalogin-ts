import { Request, Response } from "express";
import { IndexByMovieActorService } from "../services/index-by-movie-actor.service";
import { ActorDTO } from "../dtos/actor.dto";

export class IndexByMovieActorController {
    constructor(private readonly service: IndexByMovieActorService) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const movieId = req.params.movieId;
        const actors: ActorDTO[] = await this.service.execute(Number(movieId));
        if (!actors) {
            return res.status(404).json({ message: "Actors not found for this movie" });
        }
        return res.json(actors);
    }
}
