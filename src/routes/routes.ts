import { Router } from "express";

import { BookRoutes } from "../components/book/book.routes";
import { UserRoutes } from "../components/users/user.routes";
import { BookBorrowingRoutes } from "../components/bookBorrowing/book_borrowing.routes";

export class Routes {
  bookRoutes!: BookRoutes;
  userRoutes!: UserRoutes;
  bookBorrowingRoutes!: BookBorrowingRoutes;

  initialize(router: Router): void {
    this.bookRoutes = new BookRoutes(router);
    this.userRoutes = new UserRoutes(router);
    this.bookBorrowingRoutes = new BookBorrowingRoutes(router);
  }
}
