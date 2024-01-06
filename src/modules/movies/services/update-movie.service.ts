import { MovieDTO } from "../dtos/movie.dto";
import { MovieMapping } from "../mappings/movie.mapping";
import { MovieRepository } from "../repositories/movie.repository";

export class UpdateMovieService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }
    async execute(id: number, data: MovieDTO): Promise<void> {
        const movie = MovieMapping.from(data);
        await this.movieRepository.update(id, movie);
    }
}
