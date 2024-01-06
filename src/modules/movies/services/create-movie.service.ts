import { MovieDTO } from "../dtos/movie.dto";
import { MovieMapping } from "../mappings/movie.mapping";
import { MovieRepository } from "../repositories/movie.repository";

export class CreateMovieService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }
    async execute(data: MovieDTO): Promise<void> {
        const movie = MovieMapping.from(data);
        const res = await this.movieRepository.create(movie);
    }
}
