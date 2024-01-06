import { FindMovieService } from "../services/find-movie.service";
import { Request, Response } from "express";

export class FindMovieController {
  constructor(private readonly service: FindMovieService) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const movies = await this.service.execute();
    return response.json(movies);
  }
}
