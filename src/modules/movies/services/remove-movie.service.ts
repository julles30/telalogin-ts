import { MovieRepository } from "../repositories/movie.repository";

export class RemoveMovieService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }
    async execute(id: number): Promise<void> {
        await this.movieRepository.delete(id);
    }
}
