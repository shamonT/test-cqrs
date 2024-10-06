import { injectable } from "inversify";
import { IBookBorrowingRepository } from "./book-borrowing-repository.interface";
import BooksBorrowers from "../model/book-borrowing.model";
@injectable()
export class BookBorrowingService implements IBookBorrowingRepository {
  async create(inputs: any): Promise<boolean> {
    try {
      let response = await BooksBorrowers.findOne({
        bookName: inputs.book_name,
      });

      if (response) {
        response.emails.push(inputs.email);
        await response.save();

        return true;
      } else {
        const isoDate = new Date().toISOString();
        await BooksBorrowers.create({
          bookName: inputs.book_name,
          emails: [inputs.email],
          createdAt: isoDate,
          updatedAt: isoDate,
        });

        return true;
      }
    } catch (error) {
      throw new Error("Failed to create account");
    }
  }

  async getAllLists(data: any): Promise<Array<any>> {
    try {
      console.log("its herere", data);

      let list = await BooksBorrowers.find({ bookName: data.bookName });

      return list.map(({ _id, bookName, emails, createdAt }) => ({
        id: _id.toHexString(),
        bookName,
        emails,
        createdAt,
      }));
    } catch (error) {
      throw new Error("Failed to Update book");
    }
  }
}
