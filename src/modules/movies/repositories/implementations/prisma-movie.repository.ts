import { PrismaClient } from "@prisma/client";
import { MovieEntity } from "../../entities/movie.entity";
import { MovieRepository } from "../movie.repository";
import { MoviePrismaMapping } from "../../mappings/movie.prisma.mapping";

export class PrismaMovieRepository implements MovieRepository {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async create(data: MovieEntity): Promise<void> {
        try {
            const movie = MoviePrismaMapping.from(data);
            await this.prisma.movies.create({ data: movie });
        } catch (error) {
            throw new Error("Error on create movie");
        }
    }
    async findById(id: number): Promise<MovieEntity> {
        try {
            const movie = await this.prisma.movies.findUnique({ where: { id } });
            if (!movie) {
                throw new Error("Movie not found");
            }
            return MoviePrismaMapping.to(movie);
        } catch (error) {
            throw new Error("Error on find movie");
        }
    }
    async find(): Promise<MovieEntity[]> {
        try {
            const movies = await this.prisma.movies.findMany();
            return movies.map(movie => MoviePrismaMapping.to(movie));
        } catch (error) {
            console.error(error);
            throw new Error("Error on find movies");
        }
    }
    async update(id: number, data: MovieEntity): Promise<void> {
        try {
            const movie = MoviePrismaMapping.from(data);
            await this.prisma.movies.update({ where: { id }, data: movie });
        } catch (error) {
            throw new Error("Error on update movie");
        }
    }
    async delete(id: number): Promise<void> {
        try {
            await this.prisma.movies.delete({ where: { id } });
        } catch (error) {
            throw new Error("Error on delete movie");
        }
    }
}
