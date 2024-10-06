import { inject, injectable } from "inversify";
import { IHandler, IRequest, IResponse } from "../../../shared/interface";
import { IBookBorrowingRepository } from "../repository/book-borrowing-repository.interface";
@injectable()
export class GetBookBorrowingListHandler implements IHandler {
  private iBookBorrowingRepository: IBookBorrowingRepository;

  constructor(
    @inject("IBookBorrowingRepository")
    iBookBorrowingRepository: IBookBorrowingRepository
  ) {
    this.iBookBorrowingRepository = iBookBorrowingRepository;
  }

  async handle(req: any): Promise<IResponse> {
    try {
      console.log(req.params, "params");
      const { params } = req;
      console.log(params);

      const response = await this.iBookBorrowingRepository.getAllLists({
        ...params,
      });
      return {
        code: 200,
        success: true,
        message: "Booklist fetched successfully",
        data: response,
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: "Internal server error occurred",
        errors: ["No data found"],
      };
    }
  }
}
