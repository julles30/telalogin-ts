import { MovieDTO } from "../dtos/movie.dto";
import { MovieEntity } from "../entities/movie.entity";

export class MovieMapping {
  static from(movie: MovieDTO): MovieEntity {
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

