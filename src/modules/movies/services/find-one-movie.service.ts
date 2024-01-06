import { MovieEntity } from "../entities/movie.entity";
import { MovieRepository } from "../repositories/movie.repository";

export class FindOneMovieService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }
    async execute(id: number): Promise<MovieEntity> {
        const movie = await this.movieRepository.findById(id);
        return movie;
    }
}
