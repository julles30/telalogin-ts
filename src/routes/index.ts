import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import movieRoutes from './movie.routes';
import actorRoutes from './actor.routes';

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(movieRoutes);
routes.use(actorRoutes);

export default routes;
