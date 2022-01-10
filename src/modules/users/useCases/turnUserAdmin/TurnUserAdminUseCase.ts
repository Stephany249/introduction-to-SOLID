import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userId = this.usersRepository.findById(user_id);

    if (!userId) {
      throw new Error('Usuario não encontrado');
    }

    const user = this.usersRepository.turnAdmin(userId);

    return user;
  }
}

export { TurnUserAdminUseCase };
