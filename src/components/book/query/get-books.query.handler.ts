import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IHandler, IResponse } from "../../../shared/interface";
import { IBookRepository } from "../repository/book-type-reposotory.interface";

@injectable()
export class getBookQueryHandler implements IHandler {
  private iBookRepository: IBookRepository;

  constructor(
    @inject("IBookRepository")
    iBookRepository: IBookRepository
  ) {
    this.iBookRepository = iBookRepository;
  }

  async handle(): Promise<IResponse> {
    try {
      let data = await this.iBookRepository.getBooks();
      console.log(data);

      return {
        code: 200,
        success: true,
        message: "Book created successfully",
        data: data,
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
