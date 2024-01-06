import { MovieEntity } from "../entities/movie.entity";
import { movies } from "@prisma/client";

export class MoviePrismaMapping {
    static to(movie: movies): MovieEntity {
        return {
            id: movie.id,
            title: movie.title,
            director: movie.director || "",
            releasedate: movie.releasedate || new Date(),
            duration: movie.duration || 0,
            genre: movie.genre || "",
            productioncompany: movie.productioncompany || "",
            boxoffice: movie.boxoffice || 0,
            mediumrating: movie.mediumrating || 0
        }
    }

    static from(movie: MovieEntity): movies {
        return {
            id: movie.id,
            title: movie.title,
            director: movie.director,
            releasedate: movie.releasedate,
            duration: movie.duration,
            genre: movie.genre,
            productioncompany: movie.productioncompany,
            boxoffice: movie.boxoffice,
            mediumrating: movie.mediumrating
        }
    }
}
