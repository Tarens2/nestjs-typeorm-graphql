import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamsRepository: Repository<Team>,
  ) {}

  findAll(options?: FindManyOptions<Team>) {
    return this.teamsRepository.find(options);
  }

  findOne(id: number) {
    return this.teamsRepository.findOne(id);
  }

  async remove(id: string) {
    return await this.teamsRepository.delete(id);
  }
}
