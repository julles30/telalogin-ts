import { MovieDTO } from "../dtos/movie.dto";
import { CreateMovieService } from "../services/create-movie.service";
import { Request, Response } from "express";

export class CreateMovieController {
  constructor(private readonly service: CreateMovieService) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const movie = <MovieDTO>request.body;
    await this.service.execute(movie);
    return response.json({ message: "Movie created" });
  }
}
