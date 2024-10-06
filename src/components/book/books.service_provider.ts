import { Container } from "inversify";
import { IServiceProvider } from "../../shared/interface";
import { IBookRepository } from "./repository/book-type-reposotory.interface";
import { CreateBookCommandHandler } from "./command/create-book.command.handler";
import { BooksRepository } from "./repository/book-repository";
import { UpdateBookCommandHandler } from "./command/update-book.command.handler";
import { DeleteBookCommandHandler } from "./command/delete-book.command.handler";
import { getBookQueryHandler } from "./query/get-books.query.handler";

export class BookerviceProvider implements IServiceProvider {
  private container: Container;

  constructor(container: Container) {
    this.container = container;
  }

  register(): void {
    this.container.bind<IBookRepository>("IBookRepository").to(BooksRepository);
    // .toSelf()

    this.container
      .bind<CreateBookCommandHandler>(CreateBookCommandHandler)
      .toSelf();

    this.container
      .bind<UpdateBookCommandHandler>(UpdateBookCommandHandler)
      .toSelf();
    this.container
      .bind<DeleteBookCommandHandler>(DeleteBookCommandHandler)
      .toSelf();
    this.container.bind<getBookQueryHandler>(getBookQueryHandler).toSelf();
  }
}
