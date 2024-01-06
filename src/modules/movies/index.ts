import { FindMovieController } from "./controllers/find-movie.controller";
import { FindMovieService } from "./services/find-movie.service";
import { PrismaMovieRepository } from "./repositories/implementations/prisma-movie.repository";
import { FindOneMovieService } from "./services/find-one-movie.service";
import { CreateMovieController } from "./controllers/create-movie.controller";
import { FindOneMovieController } from "./controllers/find-one-movie.controller";
import { CreateMovieService } from "./services/create-movie.service";
import { RemoveMovieController } from "./controllers/remove-movie.controller";
import { UpdateMovieController } from "./controllers/update-movie.controller";
import { RemoveMovieService } from "./services/remove-movie.service";
import { UpdateMovieService } from "./services/update-movie.service";

const movieRepository = new PrismaMovieRepository();

const findMovieService = new FindMovieService(movieRepository);
const findMovieController = new FindMovieController(findMovieService);

const findOneMovieService = new FindOneMovieService(movieRepository);
const findOneMovieController = new FindOneMovieController(findOneMovieService);

const createMovieService = new CreateMovieService(movieRepository);
const createMovieController = new CreateMovieController(createMovieService);

const updateMovieService = new UpdateMovieService(movieRepository);
const updateMovieController = new UpdateMovieController(updateMovieService);

const removeMovieService = new RemoveMovieService(movieRepository);
const removeMovieController = new RemoveMovieController(removeMovieService);

export {
    findMovieController,
    findOneMovieController,
    createMovieController,
    updateMovieController,
    removeMovieController
};
