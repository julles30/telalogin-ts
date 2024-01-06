import { RemoveMovieService } from "../services/remove-movie.service";
import { Request, Response } from "express";

export class RemoveMovieController {
  constructor(private readonly service: RemoveMovieService) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.service.execute(Number(id));
    return response.json({ message: "Movie removed" });
  }
}
