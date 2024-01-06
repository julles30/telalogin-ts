import { MovieEntity } from "../../entities/movie.entity";
import { MovieRepository } from "../movie.repository";

export class PGMovieRepository implements MovieRepository {
  async create(data: MovieEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(id: number): Promise<MovieEntity> {
    throw new Error("Method not implemented.");
  }
  async find(): Promise<MovieEntity[]> {
    throw new Error("Method not implemented.");
  }
  async update(id: number, data: MovieEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
