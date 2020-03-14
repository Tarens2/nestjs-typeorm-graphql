import {
  ResolveProperty,
  Query,
  Args,
  Parent,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { TeamsService } from './teams.service';

@Resolver('Team')
export class TeamsResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  @Query('getTeam')
  async getTeam(@Args('id') id: number) {
    return this.teamsService.findOne(id);
  }

  @Query('getTeams')
  async getTeams() {
    return this.teamsService.findAll({ relations: ['users'] });
  }

  @ResolveProperty('users')
  async team(@Parent() team) {
    return team.users;
  }
}
