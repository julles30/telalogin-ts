import { MovieEntity } from '../entities/movie.entity';
export interface MovieRepository {
  create(data: MovieEntity): Promise<void>;
  findById(id: number): Promise<MovieEntity>;
  find(): Promise<MovieEntity[]>;
  update(id: number, data: MovieEntity): Promise<void>;
  delete(id: number): Promise<void>;
}
