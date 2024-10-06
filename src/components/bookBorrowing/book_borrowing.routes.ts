import { Request, Response, Router } from "express";
import { BookBorrowingController } from "./book_borrowing.controller";

export class BookBorrowingRoutes {
  private bookBorrowingController: BookBorrowingController;

  constructor(router: Router) {
    this.bookBorrowingController = new BookBorrowingController();
    this.initialize(router);
  }

  private initialize(router: Router) {
    router.post(
      "/create_book_borrowing",
      async (req: Request, res: Response) => {
        await this.bookBorrowingController.CreateBookBorrowingList(
          req as Request,
          res
        );
      }
    );
    router.get(
      "/book_borrowing_list/:bookName",
      async (req: Request, res: Response) => {
        await this.bookBorrowingController.GetBookBorrowingList(
          req as Request,
          res
        );
      }
    );
  }
}
