import "reflect-metadata";
import { inject, injectable } from "inversify";

import { IHandler, IResponse, IRequest } from "../../../shared/interface";
import { IBookRepository } from "../repository/book-type-reposotory.interface";

@injectable()
export class UpdateBookCommandHandler implements IHandler {
  private iBookRepository: IBookRepository;

  constructor(
    @inject("IBookRepository")
    iBookRepository: IBookRepository
  ) {
    this.iBookRepository = iBookRepository;
  }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const { id, name } = req.body;
      console.log(id, name);
      await this.iBookRepository.updateBooks(id, name);
      return {
        code: 200,
        success: true,
        message: "Book created successfully",
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: "Internal server error occurred",
        errors: ["updation failed"],
      };
    }
  }
}
