import { MovieDTO } from "../dtos/movie.dto";
import { FindOneMovieService } from "../services/find-one-movie.service";
import { Request, Response } from "express";

export class FindOneMovieController {
  constructor(private readonly service: FindOneMovieService) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const movie = await this.service.execute(Number(id));
    return response.json(movie);
  }
}
