import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {

    const user = this.usersRepository.findById(user_id);

    if (!user_id || !user || !user.admin) {
      throw new Error("Not have permission!");
    }


    const users = this.usersRepository.list();

    if (!users) {
      throw new Error("Not exists users!");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
