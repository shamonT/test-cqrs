import { Router, Request, Response } from "express";
import { BooksController } from "./books.controller";
import { IRequest } from "../../shared/interface";

export class BookRoutes {
  private booksController: BooksController;

  constructor(router: Router) {
    this.booksController = new BooksController();
    this.initialize(router);
  }

  private initialize(router: Router): void {
    router.post("/create-books", async (req: Request, res: Response) => {
      await this.booksController.CreateBookList(req as IRequest, res);
    });
    router.patch("/update-books", async (req: Request, res: Response) => {
      console.log("otsherere");

      await this.booksController.UpdateBookList(req as IRequest, res);
    });
    router.delete("/delete-books", async (req: Request, res: Response) => {
      console.log(req.query);

      await this.booksController.DeleteBookList(req as IRequest, res);
    });
    router.get("/get-books", async (req: Request, res: Response) => {
      await this.booksController.GetBookList(req as IRequest, res);
    });
  }
}
