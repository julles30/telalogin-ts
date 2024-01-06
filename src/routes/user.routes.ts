import {
  findController,
  createController,
  updateController,
  removeController,
  findOneController
} from "../modules/users";
import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/users", (req: Request, res: Response) => {
  findController.handle(req, res);
});

routes.post("/users", (req: Request, res: Response) => {
  createController.handle(req, res);
});

routes.get("/users/:id", (req: Request, res: Response) => {
  findOneController.handle(req, res);
});

routes.put("/users/:id", (req: Request, res: Response) => {
  updateController.handle(req, res);

});

routes.delete("/users/:id", (req: Request, res: Response) => {
  removeController.handle(req, res);
});

export default routes;