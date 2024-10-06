import { inject, injectable } from "inversify";
import { IHandler, IResponse } from "../../../shared/interface";
import { IBookBorrowingRepository } from "../repository/book-borrowing-repository.interface";
import { Request } from "express";

@injectable()
export class createBookBorrowingHandler implements IHandler {
  private ibookBorrowingRepository: IBookBorrowingRepository;

  constructor(
    @inject("IBookBorrowingRepository")
    ibookBorrowingRepository: IBookBorrowingRepository
  ) {
    this.ibookBorrowingRepository = ibookBorrowingRepository;
  }

  async handle(req: Request): Promise<IResponse> {
    console.log(req.body);
    try {
      const { body } = req;

      await this.ibookBorrowingRepository.create({
        ...body,
      });

      return {
        code: 200,
        success: true,
        message: "Book created successfully",
      };
    } catch (error) {
      // LogError('[CreateBookCommandHandler]', error);

      return {
        code: 500,
        success: false,
        message: "Internal server error occurred",
        errors: ["creation failed"],
      };
    }
  }
}
