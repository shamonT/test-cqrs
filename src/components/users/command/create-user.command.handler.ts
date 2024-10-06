import { inject, injectable } from "inversify";
import { IHandler, IResponse } from "../../../shared/interface";
import "reflect-metadata";
import { IUserRepository } from "../repository/user-type-repository.interface";

@injectable()
export class CreateUserCommandHandler implements IHandler {
  private iUserRepository: IUserRepository;

  constructor(
    @inject("IUserRepository")
    iUserRepository: IUserRepository
  ) {
    this.iUserRepository = iUserRepository;
  }
  async handle(req: any): Promise<IResponse> {
    try {
      const { body } = req;
      await this.iUserRepository.create({
        ...body,
      });
      return {
        code: 200,
        success: true,
        message: "user created successfully",
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: "Internal server error occurred",
        errors: ["creation failed"],
      };
    }
  }
}
