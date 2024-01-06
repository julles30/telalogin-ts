import { MovieDTO } from "../dtos/movie.dto";
import { UpdateMovieService } from "../services/update-movie.service";
import { Request, Response } from "express";

export class UpdateMovieController {
  constructor(private readonly service: UpdateMovieService) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const movie = <MovieDTO>request.body;
    await this.service.execute(Number(id), movie);
    return response.json({ message: "Movie updated" });
  }
}
