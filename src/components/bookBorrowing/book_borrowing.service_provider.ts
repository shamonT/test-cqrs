import { Container } from "inversify";
import { IServiceProvider } from "../../shared/interface";
import { IBookBorrowingRepository } from "./repository/book-borrowing-repository.interface";
import { BookBorrowingService } from "./repository/book-borrowing.repository";
import { createBookBorrowingHandler } from "./command/create-book-borrowing.command.handler";
import { GetBookBorrowingListHandler } from "./query/get-book-borrowing-list.query.handler";

export class BookBorrowingServiceProvider implements IServiceProvider {
  private container: Container;

  constructor(container: Container) {
    this.container = container;
  }

  register(): void {
    this.container
      .bind<IBookBorrowingRepository>("IBookBorrowingRepository")
      .to(BookBorrowingService);
    this.container
      .bind<createBookBorrowingHandler>(createBookBorrowingHandler)
      .toSelf();
    this.container
      .bind<GetBookBorrowingListHandler>(GetBookBorrowingListHandler)
      .toSelf();
  }
}
