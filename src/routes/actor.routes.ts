import {
    createActorController,
    findActorController,
    findOneActorController,
    updateActorController,
    destroyActorController,
    indexByMovieActorController
} from "../modules/actors";
import { Router, Request, Response } from "express";

const actorRoutes = Router();

actorRoutes.get("/actors", (req: Request, res: Response) => {
    findActorController.handle(req, res);
});

actorRoutes.post("/actors", (req: Request, res: Response) => {
    createActorController.handle(req, res);
});

actorRoutes.get("/actors/:id", (req: Request, res: Response) => {
    findOneActorController.handle(req, res);
});

actorRoutes.put("/actors/:id", (req: Request, res: Response) => {
    updateActorController.handle(req, res);
});

actorRoutes.delete("/actors/:id", (req: Request, res: Response) => {
    destroyActorController.handle(req, res);
});

actorRoutes.get("/movies/:movieId/actors", (req: Request, res: Response) => {
    indexByMovieActorController.handle(req, res);
});

export default actorRoutes;
