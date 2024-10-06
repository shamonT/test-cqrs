export interface IUserRepository {
  create(input: any): Promise<boolean>;
}
