import { MovieEntity } from "../../entities/movie.entity";
import { MovieRepository } from "../movie.repository";

export class MovieInMemoryRepository implements MovieRepository {
    private movies = Array<MovieEntity>();
    async create(data: MovieEntity): Promise<void> {
        this.movies.push(data);
    }
    async findById(id: number): Promise<MovieEntity> {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new Error("Movie not found");
        }
        return movie;
    }
    async find(): Promise<MovieEntity[]> {
        return this.movies;
    }
    async update(id: number, data: MovieEntity): Promise<void> {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new Error("Movie not found");
        }
        const movieMod = { ...movie, ...data };
    }
    async delete(id: number): Promise<void> {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new Error("Movie not found");
        }
        this.movies = this.movies.splice(this.movies.indexOf(movie), 1);
    }
}
