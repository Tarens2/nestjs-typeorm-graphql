import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(options?: FindManyOptions<User>) {
    return this.usersRepository.find(options);
  }

  async create(username: string, password: string) {
    const user = new User();
    user.username = username;
    user.password = password;

    return await this.usersRepository.save(user);
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  findByUsername(username: string) {
    return this.usersRepository.findOne({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
