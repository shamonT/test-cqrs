import { Container } from "inversify";

import { BookerviceProvider } from "../components/book/books.service_provider";
import { userServiceProvider } from "../components/users/users.service_provider";
import { BookBorrowingServiceProvider } from "../components/bookBorrowing/book_borrowing.service_provider";
export const container = new Container();

new BookerviceProvider(container).register();
new userServiceProvider(container).register();
new BookBorrowingServiceProvider(container).register();
