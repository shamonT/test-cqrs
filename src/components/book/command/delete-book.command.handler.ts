import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IHandler, IRequest, IResponse } from "../../../shared/interface";
import { IBookRepository } from "../repository/book-type-reposotory.interface";

@injectable()
export class DeleteBookCommandHandler implements IHandler {
  private iBookRepository: IBookRepository;

  constructor(
    @inject("IBookRepository")
    iBookRepository: IBookRepository
  ) {
    this.iBookRepository = iBookRepository;
  }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const id = req.query._id;
      console.log(id, "idd");

      await this.iBookRepository.deleteBooks(id);
      return {
        code: 200,
        success: true,
        message: "Book deleted successfully",
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
