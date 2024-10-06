import { inject, injectable } from "inversify";
import { IUserRepository } from "./user-type-repository.interface";
import Users from "../model/users.model";

@injectable()
export class userRepository implements IUserRepository {
  async create(input: any): Promise<boolean> {
    try {
      const isoDate = new Date().toISOString();
      await Users.create({
        ...input,
        createdAt: isoDate,
        updatedAt: isoDate,
      });
      return true;
    } catch (error) {
      throw new Error("Failed to create account");
    }
  }
}
