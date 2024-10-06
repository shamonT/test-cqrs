import express from "express";
import { container } from "../../config/container";
import { IRequest, IHandler } from "../../shared/interface";

import { CreateBookCommandHandler } from "./command/create-book.command.handler";
import { UpdateBookCommandHandler } from "./command/update-book.command.handler";
import { DeleteBookCommandHandler } from "./command/delete-book.command.handler";
import { getBookQueryHandler } from "./query/get-books.query.handler";

export class BooksController {
  async CreateBookList(req: IRequest, res: express.Response) {
    console.log(req.body, "dd");
    const response = await container.get(CreateBookCommandHandler).handle(req);

    return res.status(response.code).send(response);
  }
  async UpdateBookList(req: IRequest, res: express.Response) {
    console.log(req.body);
    const response = await container.get(UpdateBookCommandHandler).handle(req);
    return res.status(response.code).send(response);
  }
  async DeleteBookList(req: IRequest, res: express.Response) {
    console.log(req.query);
    const response = await container.get(DeleteBookCommandHandler).handle(req);
    return res.status(response.code).send(response);
  }

  async GetBookList(req: IRequest, res: express.Response) {
    const response = await container.get(getBookQueryHandler).handle();
    return res.status(response.code).send(response);
  }
}
