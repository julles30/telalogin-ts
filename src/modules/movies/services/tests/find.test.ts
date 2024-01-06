import { FindMovieService } from "../find-movie.service";
import { MovieInMemoryRepository } from "../../repositories/implementations/movie-in-memory.repository";
import { expect, test } from 'vitest';

const repository = new MovieInMemoryRepository();

const service = new FindMovieService(repository);

test('return []', async () => {
    // Criar um filme

    expect(await service.execute()).toStrictEqual([{
        id: 1,
        title: "test",
        director: "test",
        releasedate: new Date(),
        duration: 120,
        genre: "test",
        productioncompany: "test",
        boxoffice: 1000000,
        mediumrating: 7.5
    }])
})