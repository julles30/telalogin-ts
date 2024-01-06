import { FindUserController } from "./controllers/find-user.controller";
import { FindUserService } from "./services/find-user.service";
import { PGUserRepository } from "./repositories/implementations/pguser.repository";
import { PrismaUserRepository } from "./repositories/implementations/prisma-user.repository";
import { FindOneUserService } from "./services/find-one-user.service";
import { CreateUserController } from "./controllers/create-user.controller";
import { FindOneUserController } from "./controllers/find-one-user.controller";
import { CreateUserService } from "./services/create-user.service";
import { RemoveUserController } from "./controllers/remove-user.controller";
import { UpdateUserController } from "./controllers/update-user.controller";
import { RemoveUserService } from "./services/remove-user.service";
import { UpdateUserService } from "./services/update-user.service";

const repository = new PrismaUserRepository();

const findService = new FindUserService(repository);
const findController = new FindUserController(findService);

const findOneService = new FindOneUserService(repository);
const findOneController = new FindOneUserController(findOneService);

const createService = new CreateUserService(repository);
const createController = new CreateUserController(createService);

const updateService = new UpdateUserService(repository);
const updateController = new UpdateUserController(updateService);

const removeService = new RemoveUserService(repository);
const removeController = new RemoveUserController(removeService);

export {
  findController,
  findOneController,
  createController,
  updateController,
  removeController
};