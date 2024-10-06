export interface IBookRepository {
  create(input: any): Promise<boolean>;
  updateBooks(id: string, name: string): Promise<boolean>;
  deleteBooks(id: any): Promise<boolean>;
  getBooks(): Promise<Array<any>>;
}
