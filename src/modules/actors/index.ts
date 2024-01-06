import { CreateActorController } from "./controllers/create-actor.controller";
import { FindActorController } from "./controllers/find-actor.controller";
import { FindOneActorController } from "./controllers/find-one-actor.controller";
import { UpdateActorController } from "./controllers/update-actor.controller";
import { DestroyActorController } from "./controllers/remove-actor.controller";
import { IndexByMovieActorController } from "./controllers/index-by-movie-actor.controller";
import { ActorInMemoryRepository } from "./repositories/implementations/actor-in-memory.repository";
import { CreateActorService } from "./services/create-actor.service";
import { FindActorService } from "./services/find-actor.service";
import { FindOneActorService } from "./services/find-one-actor.service";
import { UpdateActorService } from "./services/update-actor.service";
import { RemoveActorService } from "./services/remove-actor.service";
import { IndexByMovieActorService } from "./services/index-by-movie-actor.service";

const actorRepository = new ActorInMemoryRepository();

const createActorService = new CreateActorService(actorRepository);
const createActorController = new CreateActorController(createActorService);

const findActorService = new FindActorService(actorRepository);
const findActorController = new FindActorController(findActorService);

const findOneActorService = new FindOneActorService(actorRepository);
const findOneActorController = new FindOneActorController(findOneActorService);

const updateActorService = new UpdateActorService(actorRepository);
const updateActorController = new UpdateActorController(updateActorService);

const removeActorService = new RemoveActorService(actorRepository);
const destroyActorController = new DestroyActorController(removeActorService, actorRepository);


const indexByMovieActorService = new IndexByMovieActorService(actorRepository);
const indexByMovieActorController = new IndexByMovieActorController(indexByMovieActorService);

export {
    createActorController,
    findActorController,
    findOneActorController,
    updateActorController,
    destroyActorController,
    indexByMovieActorController
};
