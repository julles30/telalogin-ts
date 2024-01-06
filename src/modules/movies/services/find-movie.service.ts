import { MovieEntity } from "../entities/movie.entity";
import { MovieRepository } from "../repositories/movie.repository";

export class FindMovieService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }
    async execute(): Promise<MovieEntity[]> {
        const movies = await this.movieRepository.find();
        return movies;
    }
}
