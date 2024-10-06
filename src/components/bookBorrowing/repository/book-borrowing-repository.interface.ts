export interface IBookBorrowingRepository {
  create(input: any): Promise<boolean>;
  getAllLists(name: string): Promise<Array<any>>;
}
