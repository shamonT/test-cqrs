import { Container } from "inversify";
import { IServiceProvider } from "../../shared/interface";
import { CreateUserCommandHandler } from "./command/create-user.command.handler";
import { IUserRepository } from "./repository/user-type-repository.interface";
import { userRepository } from "./repository/user-repository";

export class userServiceProvider implements IServiceProvider {
  private container: Container;

  constructor(container: Container) {
    this.container = container;
  }

  register(): void {
    this.container.bind<IUserRepository>("IUserRepository").to(userRepository);
    this.container
      .bind<CreateUserCommandHandler>(CreateUserCommandHandler)
      .toSelf();
  }
}
