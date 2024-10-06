import { injectable } from "inversify";

import { IBookRepository } from "./book-type-reposotory.interface";

import Books from "../model/book.model";

@injectable()
export class BooksRepository implements IBookRepository {
  async create(inputs: any): Promise<boolean> {
    try {
      const isoDate = new Date().toISOString();
      await Books.create({
        ...inputs,
        createdAt: isoDate,
        updatedAt: isoDate,
      });
      return true;
    } catch (error) {
      throw new Error("Failed to create account");
    }
  }

  async updateBooks(id: any, data: any): Promise<boolean> {
    try {
      console.log("its herere", id, data);

      let response = await Books.updateOne(
        { _id: id },
        { $set: { name: data } }
      );
      console.log(response, "response");
      return true;
    } catch (error) {
      throw new Error("Failed to Update book");
    }
  }

  async deleteBooks(id: string): Promise<boolean> {
    try {
      console.log(id, "ddd");
      await Books.deleteOne({ _id: id });
      return true;
    } catch (error) {
      throw new Error("Failed to Update book");
    }
  }

  async getBooks(): Promise<Array<any>> {
    try {
      console.log("its herere");

      let list = await Books.find();

      return list.map(({ _id, name, createdAt }) => ({
        id: _id.toHexString(),
        name,
        createdAt,
      }));
    } catch (error) {
      throw new Error("Failed to Update book");
    }
  }
}
