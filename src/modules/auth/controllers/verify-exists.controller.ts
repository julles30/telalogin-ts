import { VerifyExistsService } from "../services/verify-exists.controller";
import { Request, Response } from "express";

export class VerifyExistsController {
  constructor(private readonly service: VerifyExistsService) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { username } = req.body;
    try {
      const usuario = await this.service.execute(username);

      if (!usuario) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      return res
        .status(500)
        .send({
          message: `Erro ao verificar a existência do usuário no banco de dados - ${error}`,
        });
    }
  }
}
