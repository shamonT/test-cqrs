import express from "express";
import { container } from "../../config/container";
import { CreateUserCommandHandler } from "./command/create-user.command.handler";

export class UserController {
  async CreateUser(req: express.Request, res: express.Response) {
    const response = await container.get(CreateUserCommandHandler).handle(req);

    return res.status(response.code).send(response);
  }
}
