import express from "express";
import { container } from "../../config/container";
import { createBookBorrowingHandler } from "./command/create-book-borrowing.command.handler";
import { GetBookBorrowingListHandler } from "./query/get-book-borrowing-list.query.handler";

export class BookBorrowingController {
  async CreateBookBorrowingList(req: express.Request, res: express.Response) {
    console.log(req.body);

    const response = await container
      .get(createBookBorrowingHandler)
      .handle(req);
    return res.status(response.code).send(response);
  }
  async GetBookBorrowingList(req: express.Request, res: express.Response) {
    const response = await container
      .get(GetBookBorrowingListHandler)
      .handle(req);
    return res.status(response.code).send(response);
  }
}
