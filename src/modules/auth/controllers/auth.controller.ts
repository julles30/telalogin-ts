import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";

export class AuthController {
  constructor(private readonly service: AuthService) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    try {
      const { token, user } = await this.service.execute(username, String(password));
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Error logging in - ${error}` });
    }
  }
}
