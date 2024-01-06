import {
    findMovieController,
    createMovieController,
    updateMovieController,
    removeMovieController,
    findOneMovieController
} from "../modules/movies";
import { Router, Request, Response } from "express";

const movieRoutes = Router();

movieRoutes.get("/movies", (req: Request, res: Response) => {
    findMovieController.handle(req, res);
});

movieRoutes.post("/movies", (req: Request, res: Response) => {
    createMovieController.handle(req, res);
});

movieRoutes.get("/movies/:id", (req: Request, res: Response) => {
    findOneMovieController.handle(req, res);
});

movieRoutes.put("/movies/:id", (req: Request, res: Response) => {
    updateMovieController.handle(req, res);
});

movieRoutes.delete("/movies/:id", (req: Request, res: Response) => {
    removeMovieController.handle(req, res);
});

export default movieRoutes;