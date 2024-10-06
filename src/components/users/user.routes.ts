import { Request, Response, Router } from "express";
import { UserController } from "./user.contoller";

export class UserRoutes {
  private userController: UserController;

  constructor(router: Router) {
    this.userController = new UserController();
    this.initialize(router);
  }

  private initialize(router: Router): void {
    router.post("/create-user", async (req: Request, res: Response) => {
      await this.userController.CreateUser(req as Request, res);
    });
  }
}
